'use client';

import * as z from 'zod';
import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from 'react-hook-form';
import { formSchema } from './constants';
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import Empty from '@/components/empty';
import { useProModal } from '@/hooks/use-pro-modal';
import { toast } from 'react-hot-toast';
import ChatArea from '@/components/chat-area';

interface Message {
    role: "user" | "assistant" ;
    content?: string;
    status?: "thinking";
}

const initialMessages: Message[] = [
    {
        role: "assistant",
        content: "안녕하세요. 궁금한 내용이 있으신가요?",
    },
]

const ConversationPage = () => {
    const proModal = useProModal();
    const router = useRouter();
    // const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
    const [messages, setMessages] = useState(initialMessages);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });
    //
    const chatAreaRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    };
    //

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            let updatedMessages = [
                ...messages,
                {
                    role: "user",
                    content: values.prompt,
                } as Message,
                {
                    role: "assistant",
                    status: "thinking",
                } as Message,
            ];
            
            const response = await fetch("/api/conversation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: updatedMessages.slice(0, -1),
                }),
            });
            const result = await response.json();
            setMessages([
                ...updatedMessages.slice(0, -1),
                {
                    role: "assistant",
                    content: result.content,
                },
            ]);


            // scrollToBottom();
            form.reset();
        } catch (error: any) {
            if (error?.response?.status === 403) {
                proModal.onOpen();
            } else {
                toast.error('Something wrong')
            }
        } finally {
            router.refresh();
        }
    }


    return (
        <div>
            <Heading
                title='conversation' description="Our most advanced conversation model ever"
                icon={MessageSquare} iconColor='text-violet-500' bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="rounded-lg border w-full p-5 px-3 md:px-6 focus-within:shadow-smgridgrid-cols-12gap-2">
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="p-3 bg-zinc-400/10 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent "
                                                disabled={isLoading}
                                                placeholder="안녕하세요"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className='space-y-4 mt-4'>
                    {messages.length === 0 && !isLoading && (<Empty label='No conversation started' />)}
                    <div className='flex flex-col gap-y-4'>
                        <ChatArea messages={messages} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConversationPage;