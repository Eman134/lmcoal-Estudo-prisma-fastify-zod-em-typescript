import { FastifyReply, FastifyRequest } from 'fastify'
import { createUser } from './user.service'
import { CreateUserInput } from './user.schema'

export async function registerUserHandler(
  request: FastifyRequest<{ Body: CreateUserInput }>,
  reply: FastifyReply,
) {
  const body = request.body

  try {
    const user = await createUser(body)
    return reply.status(201).send(user)
  } catch (error) {
    console.log(error)
    return reply.status(500).send({ message: 'Internal server error' })
  }
}
