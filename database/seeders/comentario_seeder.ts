import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { ComentarioFactory } from '#database/factories/comentario_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await ComentarioFactory.createMany(10)
  }
}