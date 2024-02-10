import { z } from 'zod'

export interface Lead {
  name: string
  email: string
  phone: string
}

export const nameSchema = z.string().min(1).max(250)
export const emailSchema = z.string().email()

const phoneRegex =
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/

export const phoneSchema = z.string().min(1, 'Phone number must contain at least 1 character').regex(phoneRegex, 'Invalid Phone Number!')
