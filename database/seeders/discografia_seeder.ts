import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DiscografiaFactory } from '#database/factories/discografia_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await DiscografiaFactory.createMany(10)
  }
}