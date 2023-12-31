'use client';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import TypewriterComponent from 'typewriter-effect';
import { Button } from './ui/button';

export const LandingHero = ()=>{
  const { isSignedIn } = useAuth();
  return (
    <div className='text-white font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1  >
          The Best AI Tool EVER
          <div className='p-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            <TypewriterComponent options={{strings:[
              'Chatbot','Image Generation','Music Generation','Code Generation','Video Generation'],
              autoStart: true, loop: true }} />
          </div>
        </h1>
      </div>
      <div className='text-sm md:text-xl font-light text-zinc-400'>
        Create content using AI
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant='premium' className='md:text-lg p-4 md:p-6 rounded-full font-semibold'>
            Strat Generation For Free
          </Button>
        </Link>
      </div>
      <div className='text-zinc-400 text-xs md:text-sm font-normal'>
        AI를 활용하여 컨텐츠를 무료로 생성해보세요.
      </div>
    </div>
  )
}