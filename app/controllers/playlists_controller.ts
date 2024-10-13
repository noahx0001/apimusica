import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createPostValidator, updatePostValidator } from '#validators/playlist'
import Playlist from '#models/playlist'

export default class PlaylistsController {

    public async store({ request, response }: HttpContext) {

        const data = request.only(['user_id', 'nombre', 'descripcion'])

        const payload = await createPostValidator.validate(data)

        const user = await User.findBy('id', payload.user_id)

        if (!user) {
            return response.status(404).json({
                message: 'User no encontrado'
            })
        }

        const playlist = new Playlist()

        playlist.user_id = payload.user_id
        playlist.nombre = payload.nombre
        playlist.descripcion = payload.descripcion

        await playlist.save()

        return response.status(201).json({
            message: 'Playlist creada exitosamente',
            playlist: playlist
        })
    }

    public async update({ request, response, params }: HttpContext) {

        const id = params.id

        const data = request.only(['user_id', 'nombre', 'descripcion'])

        const payload = await updatePostValidator.validate(data)

        if (!id || isNaN(id)) {
            return response.status(400).json({
                message: 'ID no valido'
            })
        }

        const playlist = await Playlist.findBy('id', id)

        if (!playlist) {
            return response.status(404).json({
                message: 'Playlist no encontrada'
            })
        }

        const user = await User.findBy('id', payload.user_id)

        if (!user) {
            return response.status(404).json({
                message: 'User no encontrado'
            })
        }

        playlist.user_id = payload.user_id
        playlist.nombre = payload.nombre
        playlist.descripcion = payload.descripcion

        await playlist.save()

        return response.status(201).json({
            message: 'Playlist actualizada exitosamente',
            playlist: playlist
        })

    }

    public async destroy({ response, params }: HttpContext) {

        const id = params.id

        const playlist = await Playlist.findBy('id', id)

        if (!playlist) {
            return response.status(404).json({
                message: 'Playlist no encontrada'
            })
        }

        await playlist.delete()

        response.status(200).json({
            message: 'Playlist eliminada exitosamente'
        })
    }

    public async index({ response }: HttpContext) {
        const playlists = await Playlist.all()

        return response.status(200).json({
            playlists: playlists
        })
    }

    public async show({ response, params }: HttpContext) {

        const id = params.id
        const playlist = await Playlist.findBy('id', id)

        if (!playlist) {
            return response.status(404).json({
                message: 'Playlist no encontrada'
            })
        }

        return response.status(200).json({
            playlist: playlist
        })
    }
}