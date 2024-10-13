import factory from '@adonisjs/lucid/factories'
import Playlist from '#models/playlist'
import { DateTime } from 'luxon'
import { randomInt } from 'crypto'

export const PlaylistFactory = factory
  .define(Playlist, async ({ faker }) => {
    return {
      nombre: faker.music.genre(),
      descripcion: faker.lorem.sentence(),
      user_id: randomInt(1, 10),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }
  })
  .build()