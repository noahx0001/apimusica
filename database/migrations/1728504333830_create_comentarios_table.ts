import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comentarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('comentario').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('album_id').unsigned().references('id').inTable('albumes').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at').nullable().defaultTo(null)
      table.timestamp('deleted_at').nullable().defaultTo(null)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}