import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'canciones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.integer('duracion').notNullable() // Duracion en minutos
      table.integer('album_id').unsigned().references('id').inTable('albumes').onDelete('CASCADE')
      table.integer('genero_id').unsigned().references('id').inTable('generos').onDelete('CASCADE')
      table.integer('artista_id').unsigned().references('id').inTable('artistas').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at').nullable().defaultTo(null)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}