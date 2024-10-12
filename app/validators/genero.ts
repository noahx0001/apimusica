import { de } from '@faker-js/faker'
import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(3),
        descripcion: vine.string().trim().minLength(6),
    })
)

/**
 * Validates the post's update action
 */
export const updatePostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().minLength(3),
        descripcion: vine.string().trim().minLength(6),
    })
)