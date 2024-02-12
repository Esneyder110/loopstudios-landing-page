import { useEffect, useRef, useState } from 'react'
import { emailSchema, nameSchema, phoneSchema } from '../models/form.model'
import { prettyErrors } from '../utils/prettyZodErrors'
import { createLead } from '../services/leads'

interface LeadReturn {
  handleSubmit: React.FormEventHandler
  handleChangeName: React.ChangeEventHandler<HTMLInputElement>
  handleChangeEmail: React.ChangeEventHandler<HTMLInputElement>
  handleChangeTel: React.ChangeEventHandler<HTMLInputElement>
  name: string
  email: string
  tel: string
  errorName: string
  errorEmail: string
  errorTel: string
  showModal: boolean
  closeModal: React.MouseEventHandler
  resetForm: () => void
}

export function useLeads (): LeadReturn {
  const firstRenderName = useRef(true)
  const firstRenderEmail = useRef(true)
  const firstRenderTel = useRef(true)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorTel, setErrorTel] = useState('')
  const [showModal, setShowModal] = useState(false)

  const resetForm = (): void => {
    firstRenderName.current = true
    firstRenderEmail.current = true
    firstRenderTel.current = true

    setErrorName('')
    setErrorEmail('')
    setErrorTel('')

    setName('')
    setEmail('')
    setTel('')
  }

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
      setShowModal(true)
      // reiniciar el formulario
      resetForm()
      console.log('OK')
    } else {
      console.log('Pailas')
    }
    console.log({ name, email, tel })
  }

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newName = event.currentTarget.value
    setName(newName)
  }

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newEmail = event.currentTarget.value
    setEmail(newEmail)
  }

  const handleChangeTel: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newTel = event.currentTarget.value
    setTel(newTel)
  }

  // change name
  useEffect(() => {
    if (firstRenderName.current) {
      firstRenderName.current = name === ''
      return
    }
    const result = nameSchema.safeParse(name)
    if (!result.success) {
      setErrorName(prettyErrors(result.error))
    } else {
      setErrorName('')
    }
  }, [name])

  // change email
  useEffect(() => {
    if (firstRenderEmail.current) {
      firstRenderEmail.current = email === ''
      return
    }

    const result = emailSchema.safeParse(email)
    if (!result.success) {
      setErrorEmail(prettyErrors(result.error))
    } else {
      setErrorEmail('')
    }
  }, [email])

  // change tel
  useEffect(() => {
    if (firstRenderTel.current) {
      firstRenderTel.current = tel === ''
      return
    }
    const result = phoneSchema.safeParse(tel)
    if (!result.success) {
      setErrorTel(prettyErrors(result.error))
    } else {
      setErrorTel('')
    }
  }, [tel])

  const closeModal: React.MouseEventHandler = () => {
    setShowModal(false)
  }

  return {
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
    closeModal,
    resetForm
  }
}
