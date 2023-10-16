'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
const testimonial = [
  {
    title: 'spring.jpg',
    src: '/spring.jpg',
  },
  {
    title: 'summer.jpg',
    src: '/summer.jpg',
  },
  {
    title: 'maple.jpg',
    src: '/maple.jpg',
  },
  {
    title: 'winter.jpg',
    src: '/winter.jpg',
  },
  {
    title: 'mountain.jpg',
    src: '/mountain.jpg',
  },
]

const LandingContent = () => {
  return (
    <div className="px-10 pb-15">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Create the AI content below
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {testimonial.map((item) => (
          <Card key={item.title} className='rounded-lg overflow-hidden'>
            <div className="relative aspect-square">
              <Image alt='image' fill src={item.src} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}



export default LandingContent;