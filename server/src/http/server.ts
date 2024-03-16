import fastify from 'fastify'
import { creatUser } from './routes/creat-user'
import fastifyBcrypt from 'fastify-bcrypt'
import { login } from './routes/login'

const app = fastify()

app.register(fastifyBcrypt, {
  saltWorkFactor: 8
})

app.register(creatUser)
app.register(login)

app.get('/', () => {
  return 'hello'
})

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server Runner! 🤞')
})
