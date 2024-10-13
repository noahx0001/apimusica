import factory from '@adonisjs/lucid/factories'
import Discografia from '#models/discografia'
import { DateTime } from 'luxon'

export const DiscografiaFactory = factory
  .define(Discografia, async ({ faker }) => {
    return {
      nombre: faker.music.genre(),
      telefono: faker.phone.number(),
      direccion: faker.location.streetAddress(),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }
  })
  .build()