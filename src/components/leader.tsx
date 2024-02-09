import { type FC } from 'react'

export const Leader: FC = () => {
  const title = 'The leader in interactive VR'.toUpperCase()

  return (
    <section className="px-6 xl:px-40 flex flex-col xl:relative justify-center xl:items-start items-center">
      <picture
        className='md:max-[730px] md:relative'
      >
        <source media="(min-width: 1280px)" srcSet="./desktop/image-interactive.jpg" />
        <img src="./mobile/image-interactive.jpg" alt="Man with a VR artifact" />
      </picture>

      <div className='p-8 flex flex-col gap-4 md:max-w-[545px] xl:py-[100px] xl:px-12 xl:absolute xl:top-0 xl:translate-y-1/2 xl:right-40 bg-primary xl:shadow-md'>
        <h3 className='font-["Josefin_Sans"] text-accentPrimary text-[32px] xl:text-5xl text-center'>
          {title}
        </h3>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  )
}
