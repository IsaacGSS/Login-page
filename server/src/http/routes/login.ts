import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import z from 'zod'
import { createSigner } from 'fast-jwt'

export const login = async (app: FastifyInstance) => {
  app.post('/login', async (request, reply) => {
    const creatUser = z.object({
      email: z.string().email(),
      password: z.string().min(3)
    })

    const { email, password } = creatUser.parse(request.body)

    const emailValidate = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (emailValidate?.email === email) {
      const hast: boolean | void = await app.bcrypt
        .compare(password, emailValidate.password)
        .catch(err => console.error(err.message))

      if (!hast) {
        return reply.status(400).send({ mensagem: 'a senha incorreta!' })
      }

      const signSync = await createSigner({
        key: process.env.SECRET_KEY_JWT,
        expiresIn: '7d',
        header: { alg: 'HS256', typ: 'JWT' }
      })

      const token = await signSync({ id: emailValidate.id })

      return reply
        .status(201)
        .send({ mensagem: 'vc foi logado', token: token, signSync: signSync })
    }

    return reply
      .status(400)
      .send({ mensagem: 'O email nao existe, tente outro' })
  })
}
