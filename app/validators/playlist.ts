import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().maxLength(255),
        descripcion: vine.string().trim().maxLength(255),
        user_id: vine.number().min(1),
    })
)

export const updatePostValidator = vine.compile(
    vine.object({
        nombre: vine.string().trim().maxLength(255),
        descripcion: vine.string().trim().maxLength(255),
        user_id: vine.number().min(1),
    })
)