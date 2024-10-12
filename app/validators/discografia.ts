import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(6),
        telefono: vine.string().trim().maxLength(10),
        direccion: vine.string().trim().minLength(6).maxLength(255),
    })
)

/**
 * Validates the post's update action
 */
export const updatePostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(6),
        telefono: vine.string().trim().maxLength(10),
        direccion: vine.string().trim().minLength(6).maxLength(255),
    })
)