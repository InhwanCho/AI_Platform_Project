import { Card } from "@/components/ui/card";
import Image from 'next/image';

export const Pictures = () => {

  return (
    <>
      <Card className='rounded-lg overflow-hidden' >
        <div className="relative aspect-square">
          <Image alt='image' fill src='/logo.png' sizes="(max-width: 1000px) 100vw, (max-width: 1500px) 50vw, 33vw" />
        </div>
      </Card >
    </>
  )
}