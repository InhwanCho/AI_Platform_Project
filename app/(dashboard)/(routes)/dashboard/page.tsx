'use client'
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import SampleImg from '@/components/smapleimg';
import Image from 'next/image';

const tools = [
  {
    label: 'Conversational AI',
    href: '/conversation',
  },
  {
    label: 'Code Generation',
    href: '/code',
  },
  {
    label: 'Music Generation',
    href: '/music',
  },
  {
    label: 'Image Generation',
    href: '/image',
  },
  {
    label: 'Video Generation',
    href: '/video',
  },
]

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          AI를 경험해 보세요
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {tools.map((tool) => (
          <Card key={tool.label} className='rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer'
          onClick={()=> router.push(tool.href)}>
            <div className="relative aspect-square">
              <Image alt='image' fill src={tool.href+'.jpg'} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className='p-3 font-semibold text-center'>
              {tool.label}
            </div>
          </Card>
        ))}
      </div>
      {/* <SampleImg/> */}
    </div>
  )
}
