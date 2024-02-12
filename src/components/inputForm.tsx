import { type FC } from 'react'

interface Props {
  inputType: React.HTMLInputTypeAttribute
  label: string
  placeholder: string
  name: string
  value: string
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  error: string
}

export const InputForm: FC<Props> = ({ inputType, label, placeholder, name, handleChange, error, value }) => {
  return (
    <label className='flex flex-col gap-1'>
      <span>{label}</span>
      <input
      value={value}
      onChange={handleChange}
      autoComplete={name}
      name={name}
      className='border border-accentPrimary p-2 focus:outline-accentPrimary focus:rounded-none'
      type={inputType} placeholder={placeholder} />
      { error === ''
        ? null
        : <span
          className='text-red-300'
        >{error}</span>
      }
    </label>
  )
}
