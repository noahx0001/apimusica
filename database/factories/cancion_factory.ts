import factory from '@adonisjs/lucid/factories'
import Cancion from '#models/cancion'
import { DateTime } from 'luxon'
import { randomInt } from 'crypto'

export const CancionFactory = factory
  .define(Cancion, async ({ faker }) => {
    return {
      nombre: faker.music.songName(),
      duracion: randomInt(60, 300),
      artista_id: randomInt(1, 10),
      genero_id: randomInt(1, 10),
      album_id: randomInt(1, 10),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }
  })
  .build()