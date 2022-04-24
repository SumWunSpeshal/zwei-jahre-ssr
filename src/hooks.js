import cookie from 'cookie'
import { v4 as uuid } from '@lukeed/uuid'

export const handle = async ({ event, resolve }) => {
  const basicAuth = event.request.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const login = Buffer.from(auth, 'base64').toString()
    if (login === import.meta.env.VITE_BASIC_AUTH) {
      return resolve(event)
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"'
    }
  })
}
