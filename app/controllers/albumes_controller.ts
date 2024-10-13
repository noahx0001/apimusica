import type { HttpContext } from '@adonisjs/core/http'
import Album from '#models/albume'
import Artista from '#models/artista'
import { createPostValidator, updatePostValidator } from '#validators/album'
import { DateTime } from 'luxon'
import { ar } from '@faker-js/faker'

export default class AlbumesController {
    public async store({ request, response }: HttpContext) {

        const data = request.only(['nombre', 'fecha_lanzamiento', 'artista_id'])

        const payload = await createPostValidator.validate(data)

        const artista = await Artista.findBy('id', payload.artista_id)

        if (!artista) {
            return response.status(404).json({
                message: 'Artista no encontrado'
            })
        }

        const album = new Album()

        album.nombre = payload.nombre
        album.fecha_lanzamiento = new Date(payload.fecha_lanzamiento);
        album.artista_id = payload.artista_id

        await album.save()

        return response.status(201).json({
            message: 'Album creado exitosamente',
            album: album
        })
    }

    public async update({ request, response, params }: HttpContext) {

        const id = params.id

        if (!id || isNaN(id)) {
            return response.status(400).json({
                message: 'ID no valido'
            })
        }

        const data = request.only(['nombre', 'fecha_lanzamiento', 'artista_id'])

        const payload = await updatePostValidator.validate(data)

        const artista = await Artista.findBy('id', payload.artista_id)

        if (!artista) {
            return response.status(404).json({
                message: 'Artista no encontrado'
            })
        }

        const album = await Album.findBy('id', id)

        if (!album) {
            return response.status(404).json({
                message: 'album no encontrado'
            })
        }

        album.nombre = payload.nombre
        album.fecha_lanzamiento = new Date(payload.fecha_lanzamiento);
        album.artista_id = payload.artista_id

        await album.save()

        return response.status(201).json({
            message: 'Album actualizado exitosamente',
            album: album
        })

    }

    public async destroy({ response, params }: HttpContext) {

        const id = params.id

        const album = await Album.findBy('id', id)

        if (!album) {
            return response.status(404).json({
                message: 'Album no encontrado'
            })
        }

        await album.delete()

        response.status(200).json({
            message: 'Album eliminado exitosamente'
        })
    }

    public async index({ response }: HttpContext) {
        const albums = await Album.all()

        return response.status(200).json({
            albums: albums
        })
    }

    public async show({ response, params }: HttpContext) {

        const id = params.id
        const album = await Album.findBy('id', id)

        if (!album) {
            return response.status(404).json({
                message: 'Album no encontrado'
            })
        }

        return response.status(200).json({
            album: album
        })
    }
}