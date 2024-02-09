import { type FC } from 'react'

export const Links: FC = () => {
  return (
    <section className="flex flex-col gap-8 w-full lg:w-auto items-center lg:items-start">
      <img src="./logo.svg" alt="Logo loop studios"
        className='w-36'
      />
      <ul className='flex flex-col lg:flex-row lg:justify-between gap-5 text-center'>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Events </a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </section>
  )
}
