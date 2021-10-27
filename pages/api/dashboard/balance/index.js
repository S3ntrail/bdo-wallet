import { getSession } from 'next-auth/client'

export default async function handler(req, res) {

  const session = await getSession({ req })

  if (session) {
    console.log(session);
    res.send({ content: 'This is protected content. You can access this content because you are signed in.' })
  } else {
    console.log(session);
    res.send({ error: 'You must be sign in to view the protected content on this page.' })
  }
}