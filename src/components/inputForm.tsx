import { type FC } from 'react'

interface Props {
  inputType: React.HTMLInputTypeAttribute
  label: string
  placeholder: string
}

export const InputForm: FC<Props> = ({ inputType, label, placeholder }) => {
  return (
  <label htmlFor="" className='flex flex-col gap-1'>
    <span>{label}</span>
    <input
    className='border border-accentPrimary p-2 focus:outline-accentPrimary focus:rounded-none'
    type={inputType} placeholder={placeholder} />
  </label>
  )
}
