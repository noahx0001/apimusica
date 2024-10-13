import factory from '@adonisjs/lucid/factories'
import Genero from '#models/genero'
import { DateTime } from 'luxon'

export const GeneroFactory = factory
  .define(Genero, async ({ faker }) => {
    return {
      nombre: faker.music.genre(),
      descripcion: faker.lorem.sentence(),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }
  })
  .build()