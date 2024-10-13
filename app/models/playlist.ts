import { DateTime } from 'luxon'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Cancion from '#models/cancion'
import PlaylistCancion from '#models/playlist_cancion'
import User from '#models/user'

export default class Playlist extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string

  @column()
  declare user_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Cancion)
  declare canciones: HasMany<typeof Cancion>

  @hasMany(() => PlaylistCancion)
  declare playlistCanciones: HasMany<typeof PlaylistCancion>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

}