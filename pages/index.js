import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Loader from '../components/Loader'
import Date from '../components/Date'


export default function Home() {
  const [loading, setLoading] = React.useState(false)

  const handlebuttonClick = () => {
    setLoading ({loading: true})
    setTimeout(() => {
      setLoading({loading: false})
    }, 5000)
  }

  return (
    <div>
      <Head>
        <title>Chike Elenwo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-bgImage bg-100% bg-no-repeat w-[100vw] left-64'>
        <div className='container w-[100vw] h-[100vh] flex items-center justify-around'>
          <div className='relative left-60 innerContainer w-[80.06vw] h-[59.15vh] flex justify-between space-x-8'>
            <div className='sideDesc relative items-center'>
              <div className=' relative w-[66.9px] h-[66.9px] -bottom-[64.6%] rounded-[37px] bg-[#1A4680]'>
                <div className=' relative flex flex-row order-1 left-4 top-2'>
                  <p className='w-[12.95px] h-[20.21px] font-[500] text-center text-[18.65px] text-[#fff] font-futura tracking-[0.03em] leading-[25px]'>4</p>
                  <p className='w-[12px] h-[11px] font-[500] text-[8.29px] relative top-2 text-center text-[#fff] font-futura tracking-[0.03em] leading-[11px]'>yrs</p>
                </div>
                <div className=' relative top-[10px] left-4 w-[28px] h-[20px]'>
                  <p className='font-[400] text-[8.65px] text-[#fff] font-futura tracking-[0.03em] leading-[10px]'>Product Design</p>
                </div>
              </div>
              <div className='flex  relative -bottom-[67%] left-4 space-x-0.5 space-y-0.5'>
                <p className=' w-[12px] h-[20px] font-[500] text-center text-[18.65px] text-[#1A4680] font-futura tracking-[0.03em] leading-[25px]'>8</p>
                <p className='text-[#1A4680] font-futura tracking-[0.03em] leading-[11px] w-[12px] h-[11px] font-[500] text-[8.29px] relative top-2 text-center'>yrs</p>
              </div>
              <div className=' flex relative -bottom-[67.5%] left-4  order-1 w-[28px] h-[20px]'>
                  <p className='font-[400] text-[8.65px] text-[#1A4680] font-futura tracking-[0.03em] leading-[10px]'>Graphics Design</p>
              </div>
              <div className='flex  relative -bottom-[72%] left-4 space-x-0.5 space-y-0.5'>
                <p className=' w-[12px] h-[20px] font-[500] text-center text-[18.65px] text-[#1A4680] font-futura tracking-[0.03em] leading-[25px]'>30</p>
                <p className='text-[#1A4680] font-futura tracking-[0.03em] w-[6px] h-[11px] left-3 font-[500] text-[8.29px] relative top-1 text-center'>+</p>
              </div>
              <div className=' flex relative -bottom-[72.5%] left-4  order-1 w-[28px] h-[20px]'>
                  <p className='font-[400] text-[8.65px] text-[#1A4680] font-futura tracking-[0.03em] leading-[10px]'>Completed Projects</p>
              </div>
            </div>
            <div className='frameL w-[36.446vw] h-full bg-yellow-500'>
              <div className='frameLchild relative w-[92%] h-[65.9%] left-[4%] top-[10%] rotate-[-11.23deg]'>
                <Image
                  src='/Astronaut.png'
                  alt='An Astronaut'
                  fill
                  sizes="(min-width: 1200) 50vw"
                />
              </div>
              <div className='animatedText'>
                <p>Chike Designrs<br />Space Station<br /><Date /></p>
              </div>
            </div>
            <div className='frameR w-[61.04vw] flex-col bg-white shadow-[0_4px_50px_rgba(0,0,0,0.1)] space-y-4'>
              <div className='frameRtext relative items-start w-[73%] h-[37%] order-1 p-0 grow-0 gap-5 top-20 left-20'>
                  <div className='frt1 w-[100%] h-[71%] items-end align-middle gap-9'>
                    <h3 className=' text-4xl font-[500] font-futura tracking-[0.03em] text-[#0C6AA1] leading-[43px] gap-9'>Hi, I am</h3>
                    <h2 className=' text-7xl font-[700] font-futura text-[#1A4680] tracking-[0.03em] leading-[95px] gap-9'>Chike Elenwo</h2>
                  </div>
                  <div className=' items-end w-[100%] h-[9.9%]'>
                    <p className='text-[#0C6AA1] font-[400] text-[36px] gap-9 leading-[43px] tracking-[0.03em]'>Welcome to my portfolio</p>
                </div>
              </div>
              <div className='frameRtext relative flex items-start flex-col w-[73%] h-[27%] top-28 p-0 grow-0 order-1 left-20 gap-[38px]'>
                <div className=' w-[100%] h-[47%] space-y-4'>
                  <p className='text-[#0C6AA1] font-futura font-[400] text-[16px] leading-[19px] tracking-[0.03em]'>I advice that you fasten your seatbelts and   secure all your attention as what you are about to see will blow your mind.</p>
                  <p className='text-[#0C6AA1] font-futura font-[400] text-[16px] leading-[19px] tracking-[0.03em]'>Click the button below when you are ready for lift-off.</p>
                </div>
                <div className=' w-[44%] h-[29%]  items-end'>
                  <button onClick={handlebuttonClick} disabled={loading} className='w-[100%] h-[100%] text-[#fff] bg-[#1A4680]'>
                    <Link href='/resumeOne'>
                      {/* {loading && (<Loader />)} */}
                      {loading && <div className='flex flex-row items-center justify-center py-[13px] px-[39px] space-x-2'>
                          <div><p>Lift Off</p></div>
                          <div><Loader /></div>
                        </div> }
                      {!loading && <div><p>Lift Off</p></div> }
                    </Link> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
