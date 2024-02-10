import React, { useState, type FC } from 'react'

import { InputForm } from './inputForm'
import { type Lead, emailSchema, nameSchema, phoneSchema } from '../models/form.model'
import { prettyErrors } from '../utils/prettyZodErrors'

async function createLead ({ name, email, phone }: Lead): Promise<string> {
  try {
    const newLead = {
      name,
      email,
      phone
    }

    const res = await fetch('http://localhost:3000/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLead)
    })

    if (!res.ok) throw new Error(JSON.stringify(res.body))
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error('Error en la peticion')
  }
}

export const Leads: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorTel, setErrorTel] = useState('')

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()

    const nameResult = nameSchema.safeParse(name)
    if (!nameResult.success) setErrorName(prettyErrors(nameResult.error))

    const emailResult = emailSchema.safeParse(email)
    if (!emailResult.success) setErrorEmail(prettyErrors(emailResult.error))

    const phoneResult = phoneSchema.safeParse(tel)
    if (!phoneResult.success) setErrorTel(prettyErrors(phoneResult.error))

    if (nameResult.success && emailResult.success && phoneResult.success) {
      // hago el fetch
      createLead({ name, email, phone: tel }).then(data => {
        return data
      }).catch(error => {
        console.log(error)
      })
      // mostar modal
      console.log('OK')
    } else {
      console.log('Pailas')
    }
    console.log({ name, email, tel })
  }

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newName = event.currentTarget.value
    const result = nameSchema.safeParse(newName)

    if (!result.success) {
      setErrorName(prettyErrors(result.error))
    } else {
      setErrorName('')
    }

    setName(newName)
  }

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newEmail = event.currentTarget.value

    const result = emailSchema.safeParse(newEmail)
    if (!result.success) {
      setErrorEmail(prettyErrors(result.error))
    } else {
      setErrorEmail('')
    }

    setEmail(newEmail)
  }

  const handleChangeTel: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newTel = event.currentTarget.value

    const result = phoneSchema.safeParse(newTel)
    if (!result.success) {
      setErrorTel(prettyErrors(result.error))
    } else {
      setErrorTel('')
    }

    setTel(newTel)
  }

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
      </form>
    </section>
  )
}
