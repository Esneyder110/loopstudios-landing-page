import { type Lead } from '../models/form.model'

export async function createLead ({ name, email, phone }: Lead): Promise<string> {
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
