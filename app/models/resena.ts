import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Cancione from '#models/cancion'

export default class Resena extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare resena: string

  @column()
  declare fecha: DateTime

  @column()
  declare calificacion: number

  @column()
  declare user_id: number

  @column()
  declare cancion_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Cancione)
  declare cancion: BelongsTo<typeof Cancione>
}