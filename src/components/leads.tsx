import { type FC } from 'react'

import { InputForm } from './inputForm'
import { Modal } from './modal'
import { useLeads } from '../hooks/useLeads'

export const Leads: FC = () => {
  const {
    handleSubmit,
    handleChangeName,
    handleChangeEmail,
    handleChangeTel,
    name,
    email,
    tel,
    errorName,
    errorEmail,
    errorTel,
    showModal,
    closeModal
  } = useLeads()

  return (
    <section className='px-6 md:px-40 flex flex-col justify-center items-center md:items-start gap-6 max-w-screen-md'>
      <h3 className='font-["Josefin_Sans"] text-accentPrimary text-[32px] xl:text-5xl'>{'Get in touch'.toUpperCase()}</h3>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full' noValidate>
        <InputForm
          handleChange={handleChangeName} error={errorName}
          value={name} name='name' label='Name' inputType='text' placeholder='Jhon Doe' />

        <InputForm
          handleChange={handleChangeEmail} error={errorEmail}
          value={email} name='email' label='Email' inputType='email' placeholder='example@gmail.com' />

        <InputForm
          handleChange={handleChangeTel} error={errorTel}
          value={tel} name='tel' label='Phone' inputType='text' placeholder='+584241254540' />

        <button
          type='submit'
          className=' font-["Alata"] text-accentPrimary border border-solid border-accentPrimary px-10 py-[10px] hover:bg-accentPrimary hover:text-primary focus:outline-accentPrimary'
          >{'Send'.toUpperCase()}</button>
          { showModal &&
          <Modal message='We recive your data. Thank you for your interest!'
            closeModal={closeModal}
          /> }
      </form>
    </section>
  )
}
