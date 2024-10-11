import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Album from '#models/album'
import Genero from '#models/genero'
import PlaylistCancion from './playlist_cancion.js'


export default class Cancion extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare duracion: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Album)
  declare album: BelongsTo<typeof Album>

  @belongsTo(() => Genero)
  declare genero: BelongsTo<typeof Genero>

  @hasMany(() => PlaylistCancion)
  declare playlistCanciones: HasMany<typeof PlaylistCancion>

}