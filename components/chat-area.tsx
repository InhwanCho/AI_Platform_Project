import { useEffect } from "react";
import BotAvatar from "@/components/bot-avatar";
import UserAvatar from "@/components/user-avatar";

export default function ChatArea({
  messages,
  // scrollToBottom,
}: {
  messages: Array<{}>;
  // scrollToBottom: Function;
}) {
  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);


  return (
    <>
      {messages.map((message:any, index) => {
        if (message.role === "assistant") {
          return (
            <div className="mb-4 flex justify-start" key={index}>
              <div className="whitespace-pre-wrap rounded-xl border border-gray-200 bg-gray-100 px-4 py-2 last:mb-0">
                <BotAvatar />
                <p className='text-sm'>
                  {message.content}
                </p>
              </div>
            </div>
          );
        } else if (message.role === "user") {
          return (
            <div className="mb-4 flex justify-end last:mb-0" key={index}>
              <div>
                <div className="whitespace-pre-wrap rounded-xl border border-gray-200 bg-gray-100 px-4 py-2 last:mb-0">
                  <p className='text-sm'>
                    {message.content}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}