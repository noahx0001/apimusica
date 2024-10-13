import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Albume from '#models/albume'

export default class Comentario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare comentario: string

  @column()
  declare user_id: number

  @column()
  declare album_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Albume)
  declare album: BelongsTo<typeof Albume>
}