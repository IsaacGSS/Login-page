import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import z from 'zod'
import { createSigner, createVerifier } from 'fast-jwt'

export const creatUser = async (app: FastifyInstance) => {
  app.post('/user', async (request, reply) => {
    const creatUser = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(3)
    })

    const { name, email, password } = creatUser.parse(request.body)

    const emailValidate = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (emailValidate?.email === email) {
      return reply
        .status(400)
        .send({ mensagem: 'O email ja existe, tente outro' })
    }

    const hash: any = await app.bcrypt
      .hash(password)
      .then(hash => {
        return hash
      })
      .catch(err => console.error(err.message))

    const newuser = await prisma.user.create({
      data: {
        name,
        email,
        password: hash
      }
    })

    const { password: _, ...user } = newuser

    const signSync = await createSigner({
      key: process.env.SECRET_KEY_JWT,
      expiresIn: '7d',
      header: { alg: 'HS256', typ: 'JWT' }
    })

    let token = await signSync({ id: user.id })

    const verifySync = createVerifier({ key: process.env.SECRET_KEY_JWT })
    const payload = verifySync(token)

    return reply.status(201).send({ payload })
  })
}
