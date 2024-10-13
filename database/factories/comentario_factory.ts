import factory from '@adonisjs/lucid/factories'
import Comentario from '#models/comentario'
import { DateTime } from 'luxon'
import { randomInt } from 'crypto'

export const ComentarioFactory = factory
  .define(Comentario, async ({ faker }) => {
    return {
      comentario: faker.lorem.sentence(),
      user_id: randomInt(1, 10),
      album_id: randomInt(1, 10),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }
  })
  .build()