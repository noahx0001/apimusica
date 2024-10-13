import factory from '@adonisjs/lucid/factories'
import Albumes from '#models/albume'
import { randomInt } from 'crypto'
import { DateTime } from 'luxon'


export const AlbumFactory = factory
  .define(Albumes, async ({ faker }) => {
    return {
      nombre: faker.music.album(),
      artista_id: randomInt(1, 10),
      fecha_lanzamiento: faker.date.past(),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }
  })
  .build()