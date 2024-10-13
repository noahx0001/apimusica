import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { PlaylistFactory } from '#database/factories/playlist_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await PlaylistFactory.createMany(10)
  }
}