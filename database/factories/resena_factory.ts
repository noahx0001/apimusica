import factory from '@adonisjs/lucid/factories'
import Resena from '#models/resena'
import { randomInt } from 'crypto'
import { DateTime } from 'luxon'

export const ResenaFactory = factory
  .define(Resena, async ({ faker }) => {
    return {
      resena: faker.lorem.sentence(),
      calificacion: randomInt(1, 5),
      user_id: randomInt(1, 10),
      cancion_id: randomInt(1, 10),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }
  })
  .build()