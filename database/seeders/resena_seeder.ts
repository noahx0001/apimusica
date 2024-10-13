import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { ResenaFactory } from '#database/factories/resena_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await ResenaFactory.createMany(10)
  }
}