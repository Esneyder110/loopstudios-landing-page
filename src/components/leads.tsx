import { type FC } from 'react'

import { InputForm } from './inputForm'

export const Leads: FC = () => {
  const titleUpper = 'Get in touch'.toUpperCase()
  const submitText = 'Send'.toUpperCase()

  return (
    <section className='px-6 md:px-40 flex flex-col justify-center items-center md:items-start gap-6 max-w-screen-md'>
      <h3 className='font-["Josefin_Sans"] text-accentPrimary text-[32px] xl:text-5xl'>{titleUpper}</h3>
      <form action="" className='flex flex-col gap-6 w-full'>
        <InputForm label='Name' inputType='text' placeholder='Jhon Doe' />
        <InputForm label='Email' inputType='email' placeholder='example@gmail.com' />
        <InputForm label='Phone' inputType='text' placeholder='+584241254540' />
      </form>
      <button
          className='
          font-["Alata"] text-accentPrimary
          border border-solid border-accentPrimary
          px-10
          py-[10px]
          hover:bg-accentPrimary
          hover:text-primary
          focus:outline-accentPrimary
          '
        >{submitText}</button>
    </section>
  )
}
