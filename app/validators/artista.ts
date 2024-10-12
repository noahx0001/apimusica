import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const createPostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(6),
        nacionalidad: vine.string().trim().minLength(6),
    })
)

/**
 * Validates the post's update action
 */
export const updatePostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(6),
        nacionalidad: vine.string().trim().minLength(6),
    })
)