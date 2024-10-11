import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Cancion from '#models/cancion'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Artista from '#models/artista'
import Comentario from '#models/comentario'
import { compileFunction } from 'vm'

export default class Album extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare fecha_lanzamiento: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Cancion)
  declare canciones: HasMany<typeof Cancion>

  @belongsTo(() => Artista)
  declare artistas: BelongsTo<typeof Artista>

  @hasMany(() => Comentario)
  declare comentarios: HasMany<typeof Comentario>


}