import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { GeneroFactory } from '#database/factories/genero_factory'

export default class extends BaseSeeder {
  async run() {
    await GeneroFactory.createMany(10)
  }
}