import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(6),
        duracion: vine.number().min(1),
        album_id: vine.number().min(1),
        genero_id: vine.number().min(1),
        artista_id: vine.number().min(1),
    })
)

/**
 * Validates the post's update action
 */
export const updatePostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(6),
        duracion: vine.number().min(1),
        album_id: vine.number().min(1),
        genero_id: vine.number().min(1),
        artista_id: vine.number().min(1),
    })
)