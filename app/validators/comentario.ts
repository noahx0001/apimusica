import Comentario from '#models/comentario'
import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
    vine.object({
        comentario: vine.string().trim().maxLength(500),
        user_id: vine.number().min(1),
        album_id: vine.number().min(1),
    })
)

export const updatePostValidator = vine.compile(
    vine.object({
        comentario: vine.string().trim().maxLength(500),
        user_id: vine.number().min(1),
        album_id: vine.number().min(1),
    })
)