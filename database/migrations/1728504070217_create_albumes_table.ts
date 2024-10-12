import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'albumes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.date('fecha_lanzamiento')
      table.integer('artista_id').unsigned().references('id').inTable('artistas').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at').nullable().defaultTo(null)
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}