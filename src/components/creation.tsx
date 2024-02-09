import { type FC } from 'react'

interface Props {
  title: string
  imageUrlMobile: string
  imageUrlDesktop: string
}

export const Creation: FC<Props> = ({ title, imageUrlDesktop, imageUrlMobile }) => {
  const titleUpper = title.toUpperCase()

  return (
    <article className="w-full min-h-32 bg-blue-400 relative group">
      <picture
        className=''
      >
        <source media="(min-width: 768px)" srcSet={imageUrlDesktop} />
        <img className='w-full min-h-32' src={imageUrlMobile} alt={title} />
      </picture>
        <h3 className='
        w-1/3
        absolute
        z-20
        left-[10px]
        bottom-[10px]
        font-["Josefin_Sans"] text-primary
        text-2xl
        xl:text-[32px]
        group-hover:text-accentPrimary
        '>
          {titleUpper}
        </h3>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0 transition duration-100 ease-in-out hover:opacity-50"></div>
    </article>
  )
}
