import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
    vine.object({
        resena: vine.string().trim().maxLength(500),
        calificacion: vine.number(),
        user_id: vine.number().min(1),
        cancion_id: vine.number().min(1),
    })
)

/**
 * Validates the post's update action
 */
export const updatePostValidator = vine.compile(
    vine.object({
        resena: vine.string().trim().maxLength(500),
        calificacion: vine.number(),
        user_id: vine.number().min(1),
        cancion_id: vine.number().min(1),
    })
)