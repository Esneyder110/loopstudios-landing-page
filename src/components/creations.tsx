import { type FC } from 'react'

import { Creation } from './creation'
import { creationList } from '../assets/creationsList'

export const Creations: FC = () => {
  const title = 'Our creations'.toUpperCase()
  const seeMoreText = 'See all'.toUpperCase()

  return (
    <section className="px-6 md:px-40 flex flex-col justify-center items-center gap-12">
      <div className='md:flex md:justify-between md:w-full'>
        <h3 className='font-["Josefin_Sans"] text-accentPrimary text-[32px] xl:text-5xl'>
          {title}
        </h3>
        <button
          className=' font-["Alata"] text-accentPrimary border border-solid border-accentPrimary px-10 py-[10px] hover:bg-accentPrimary hover:text-primary md:block hidden'
        >{seeMoreText}</button>
      </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-9'>
        {
          creationList.map(creation => {
            return (<Creation key={creation.title} title= {creation.title } imageUrlMobile={creation.imageUrlMobile} imageUrlDesktop={creation.imageUrlDesktop}/>)
          })
        }
        </div>
        <button
          className=' font-["Alata"] text-accentPrimary border border-solid border-accentPrimary px-10 py-[10px] hover:bg-accentPrimary hover:text-primary md:hidden'
        >{seeMoreText}</button>
    </section>
  )
}
