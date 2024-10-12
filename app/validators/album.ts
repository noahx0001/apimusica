import vine from '@vinejs/vine'
export const createPostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(6),
        fecha_lanzamiento: vine.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/),
        artista_id: vine.number().min(1),
    })
)

/**
 * Validates the post's update action
 */
export const updatePostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(6),
        fecha_lanzamiento: vine.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/),
        artista_id: vine.number().min(1)
    })
)