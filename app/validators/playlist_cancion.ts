import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
    vine.object({
        playlist_id: vine.number().min(1),
        cancion_id: vine.number().min(1),
    })
)

export const updatePostValidator = vine.compile(
    vine.object({
        playlist_id: vine.number().min(1),
        cancion_id: vine.number().min(1),
    })
)