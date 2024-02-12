import { type FC } from 'react'

export const Hero: FC = () => {
  const title = 'Immersive experiences that deliver'.toUpperCase()

  return (
    <section className="bg-[url('./mobile/image-hero.jpg')] md:bg-[url('./desktop/image-hero.jpg')] bg-cover h-[calc(100vh-1rem)] md:max-h-[650px] px-6 md:px-40 flex justify-center lg:justify-normal items-center">
      <h1
      className='p-6 md:p-12 md:max-w-[720px] font-["Josefin_Sans"] text-primary text-[2.5rem] md:text-7xl border-[3px] border-solid border-primary'
      >{title}</h1>
    </section>
  )
}
