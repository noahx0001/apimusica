import factory from '@adonisjs/lucid/factories'
import PlaylistCancion from '#models/playlist_cancion'
import { randomInt } from 'crypto'
import { DateTime } from 'luxon'


export const PlaylistCancionFactory = factory
  .define(PlaylistCancion, async ({ faker }) => {
    return {
      playlist_id: randomInt(1, 10),
      cancion_id: randomInt(1, 10),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }
  })
  .build()