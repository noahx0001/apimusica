import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { CancionFactory } from '#database/factories/cancion_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await CancionFactory.createMany(10)
  }
}