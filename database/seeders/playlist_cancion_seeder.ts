import { PlaylistCancionFactory } from '#database/factories/playlist_cancion_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await PlaylistCancionFactory.createMany(10)
  }
}