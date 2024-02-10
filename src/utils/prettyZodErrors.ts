import { type ZodError } from 'zod'

export const prettyErrors = (error: ZodError<string>): string => {
  return error.issues.map(issue => issue.message).join(', ')
}
