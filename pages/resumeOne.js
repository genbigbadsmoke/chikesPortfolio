import Image from "next/image";
import { useState } from "react"

export default function ResumePage() {
  
  const [imageOpacity, setImageOpacity] = useState(1);
  const [newDivOpacity, setNewDivOpacity] = useState(1);

  setTimeout(() => {
    setImageOpacity(0);
    setNewDivOpacity(1);
  }, 2500);

  return (
    <div className="flex items-center relative min-w-full h-982">
      <Image src="/liftOff.jpg" width={1500} height={500} alt="A spaceship" style={{ opacity: imageOpacity }} />

      <div className='flex items-center relative min-w-full h-[3830px] bg-bgImage bg-100% bg-no-repeat'>
        <div className=" w-[10.97px] h-3 top-[0.08px] bg-black"></div>
      </div>

    </div>
  )
}