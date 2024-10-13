import type { HttpContext } from '@adonisjs/core/http'
import PlaylistCancione from '#models/playlist_cancion'
import { createPostValidator, updatePostValidator } from '#validators/playlist_cancion'
import Cancione from '#models/cancion'
import Playlist from '#models/playlist'

export default class PlaylistsCancionesController {
    public async store({ request, response }: HttpContext) {

        const data = request.only(['playlist_id', 'cancion_id'])

        const payload = await createPostValidator.validate(data)

        const playlist = await Playlist.findBy('id', payload.playlist_id)

        if (!playlist) {
            return response.status(404).json({
                message: 'Playlist no encontrada'
            })
        }

        const cancion = await Cancione.findBy('id', payload.cancion_id)

        if (!cancion) {
            return response.status(404).json({
                message: 'Cancion no encontrada'
            })
        }


        const PlaylistCancion = new PlaylistCancione()

        PlaylistCancion.playlist_id = payload.playlist_id
        PlaylistCancion.cancion_id = payload.cancion_id

        await PlaylistCancion.save()

        return response.status(201).json({
            message: 'PlaylistCancion creado exitosamente',
            PlaylistCancion: PlaylistCancione
        })
    }

    public async update({ request, response, params }: HttpContext) {

        const id = params.id

        if (!id || isNaN(id)) {
            return response.status(400).json({
                message: 'ID no valido'
            })
        }

        const data = request.only(['playlist_id', 'cancion_id'])

        const payload = await updatePostValidator.validate(data)

        const PlaylistCancion = await PlaylistCancione.findBy('id', id)

        if (!PlaylistCancion) {
            return response.status(404).json({
                message: 'PlaylistCancion no encontrada'
            })
        }

        const playlist = await Playlist.findBy('id', payload.playlist_id)

        if (!playlist) {
            return response.status(404).json({
                message: 'Playlist no encontrada'
            })
        }

        const cancion = await Cancione.findBy('id', payload.cancion_id)

        if (!cancion) {
            return response.status(404).json({
                message: 'Cancion no encontrada'
            })
        }

        PlaylistCancion.playlist_id = payload.playlist_id
        PlaylistCancion.cancion_id = payload.cancion_id

        await PlaylistCancion.save()

        return response.status(201).json({
            message: 'PlaylistCancion actualizado exitosamente',
            PlaylistCancion: PlaylistCancion
        })

    }


    public async destroy({ response, params }: HttpContext) {

        const id = params.id

        const PlaylistCancion = await PlaylistCancione.findBy('id', id)

        if (!PlaylistCancion) {
            return response.status(404).json({
                message: 'PlaylistCancion no encontrada'
            })
        }

        await PlaylistCancion.delete()

        response.status(200).json({
            message: 'PlaylistCancion eliminada exitosamente'
        })
    }

    public async index({ response }: HttpContext) {
        const PlaylistCanciones = await PlaylistCancione.all()

        return response.status(200).json({
            PlaylistCanciones: PlaylistCanciones
        })
    }

    public async show({ response, params }: HttpContext) {

        const id = params.id
        const PlaylistCancion = await PlaylistCancione.findBy('id', id)

        if (!PlaylistCancion) {
            return response.status(404).json({
                message: 'PlaylistCancion no encontrada'
            })
        }

        return response.status(200).json({
            PlaylistCancion: PlaylistCancion
        })
    }
}