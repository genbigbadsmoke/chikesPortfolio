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
      <img src="/liftOff.jpg"  style={{ opacity: imageOpacity }} />

      <div className='flex items-center relative min-w-full h-982 bg-bgImage bg-100% bg-no-repeat'>
    </div>

    </div>
  )
}