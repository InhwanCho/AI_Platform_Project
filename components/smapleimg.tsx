import { Card } from "@/components/ui/card";
import Image from 'next/image';
import { Pictures } from "@/components/pictures";

const SampleImg = () => {
  return (
    <>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold px-7'>내면의 크리에이터를 드러내세요</h2>
      </div>
      <div className="w-full p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 items-center justify-center ">
        <div className="col-start-1 col-span-2 row-span-2 md:col-span-1 md:row-span-1">
          <Pictures />
        </div>
        <div className="col-start-3 col-span-1 ">
          <Pictures />
        </div>
        <div className="col-start-4 col-span-1 ">
          <Pictures />
        </div>
        <div className="row-start-2 col-start-3 ">
          <Pictures />
        </div>
        <div className="row-start-2 col-start-4">
          <Pictures />
        </div>
        <div className="row-start-3 col-start-1 ">
          <Pictures />
        </div>
        <div className="row-start-3 col-start-2 ">
          <Pictures />
        </div>
        <div className="row-start-3 col-start-3 ">
          <Pictures />
        </div>
        <div className="row-start-3 col-start-4 ">
          <Pictures />
        </div>
      </div>
    </>
  );
}

export default SampleImg;