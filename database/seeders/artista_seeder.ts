import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { ArtistaFactory } from '#database/factories/artista_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await ArtistaFactory.createMany(10)
  }
}