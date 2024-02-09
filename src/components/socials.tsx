import { type FC } from 'react'

export const Socials: FC = () => {
  return (
    <section className="flex flex-col gap-5 w-full lg:w-auto items-center lg:items-end">
      <ul className='flex gap-6 text-center'>
        <li><a href="#"><img src="icon-facebook.svg" alt="" /></a></li>
        <li><a href="#"><img src="icon-instagram.svg" alt="" /></a></li>
        <li><a href="#"><img src="icon-pinterest.svg" alt="" /> </a></li>
        <li><a href="#"><img src="icon-twitter.svg" alt="" /></a></li>
      </ul>
      <p>© 2021 Loopstudios. All rights reserved.</p>
    </section>
  )
}
