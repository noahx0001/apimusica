import factory from '@adonisjs/lucid/factories'
import Artista from '#models/artista'
import { DateTime } from 'luxon'

export const ArtistaFactory = factory
  .define(Artista, async ({ faker }) => {
    return {
      nombre: faker.music.artist(),
      nacionalidad: faker.location.country(),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }
  })
  .build()