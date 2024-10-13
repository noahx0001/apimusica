import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { AlbumFactory } from '#database/factories/album_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await AlbumFactory.createMany(10)
  }
}