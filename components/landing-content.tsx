'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const testimonial = [
  {
    name: 'Inhwan CHO',
    avatar: 'A',
    title: 'Title1',
    description: "This is the best application I've made",
  },
  {
    name: 'Inhwan CHO',
    avatar: 'A',
    title: 'Title2',
    description: "This is the best application I've made",
  },
  {
    name: 'Inhwan CHO',
    avatar: 'A',
    title: 'Title3',
    description: "This is the best application I've made",
  },
  {
    name: 'Inhwan CHO',
    avatar: 'A',
    title: 'Title4',
    description: "This is the best application I've made",
  },
]

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        test
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonial.map((item) => (
          <Card key={item.title} className='bg-[#192339] border-none text-white'>
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-4">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default LandingContent;