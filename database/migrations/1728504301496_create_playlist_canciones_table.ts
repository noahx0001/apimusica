import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'playlist_canciones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('playlist_id').unsigned().references('id').inTable('playlists').onDelete('CASCADE')
      table.integer('cancion_id').unsigned().references('id').inTable('canciones').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at').nullable().defaultTo(null)
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}