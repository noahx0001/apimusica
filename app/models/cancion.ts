import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Albumes from '#models/albume'
import Genero from '#models/genero'
import PlaylistCancion from '#models/playlist_cancion'


export default class Cancione extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare duracion: number

  @column()
  declare album_id: number

  @column()
  declare genero_id: number

  @column()
  declare artista_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Albumes)
  declare album: BelongsTo<typeof Albumes>

  @belongsTo(() => Genero)
  declare genero: BelongsTo<typeof Genero>

  @hasMany(() => PlaylistCancion)
  declare playlistCanciones: HasMany<typeof PlaylistCancion>

}