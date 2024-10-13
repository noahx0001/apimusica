import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Playlist from '#models/playlist'
import Cancion from '#models/cancion'

export default class PlaylistCancione extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare playlist_id: number

  @column()
  declare cancion_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Playlist)
  declare playlist: BelongsTo<typeof Playlist>

  @belongsTo(() => Cancion)
  declare cancion: BelongsTo<typeof Cancion>

}