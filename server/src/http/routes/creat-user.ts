import { FastifyInstance } from 'fastify'
import { fastifyBcrypt } from 'fastify-bcrypt'
import { prisma } from '../../lib/prisma'
import z from 'zod'

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
        .status(201)
        .send({ mensagem: 'O email ja existe, tente outro' })
    }

    const hash: any = await app.bcrypt
      .hash(password)
      .then(hash => {
        console.log('Hash gerado:', hash)
        return hash
      })
      .catch(err => console.error(err.message))

    await prisma.user.create({
      data: {
        name,
        email,
        password: hash
      }
    })

    return reply.status(201).send({ password: hash })
  })
}
