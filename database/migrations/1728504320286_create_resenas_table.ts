import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'resenas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('resena').notNullable()
      table.timestamp('fecha').defaultTo(this.now())
      table.integer('calificacion')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('cancion_id').unsigned().references('id').inTable('canciones').onDelete('CASCADE')
      table.timestamp('created_at').nullable().defaultTo(null)
      table.timestamp('updated_at').nullable().defaultTo(null)
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}