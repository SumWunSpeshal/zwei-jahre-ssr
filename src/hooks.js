export const handle = async ({ event, resolve }) => {
  const basicAuth = event.request.headers.get('authorization')

  if (basicAuth) {
    const [_, auth] = basicAuth.split(' ')
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
