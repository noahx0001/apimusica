import type { HttpContext } from '@adonisjs/core/http'
import Cancione from '#models/cancion'
import { createPostValidator, updatePostValidator } from '#validators/cancion'
import Artista from '#models/artista'
import Genero from '#models/genero'
import Albumes from '#models/albume'

export default class CancionsController {
    public async store({ request, response }: HttpContext) {

        const data = request.only(['nombre', 'duracion', 'album_id', 'genero_id', 'artista_id'])

        const payload = await createPostValidator.validate(data)

        const artista = await Artista.findBy('id', payload.artista_id)

        if (!artista) {
            return response.status(404).json({
                message: 'Artista no encontrado'
            })
        }
        const genero = await Genero.findBy('id', payload.genero_id)

        if (!genero) {
            return response.status(404).json({
                message: 'Genero no encontrado'
            })
        }

        const album = await Albumes.findBy('id ', payload.album_id)

        if (!album) {
            return response.status(404).json({
                message: 'Album no encontrado'
            })
        }

        const cancion = new Cancione()

        cancion.nombre = payload.nombre
        cancion.duracion = payload.duracion
        cancion.album_id = payload.album_id
        cancion.genero_id = payload.genero_id
        cancion.artista_id = payload.artista_id

        await cancion.save()

        return response.status(201).json({
            message: 'Cancion creada exitosamente',
            cancion: cancion
        })
    }

    public async update({ request, response, params }: HttpContext) {

        const id = params.id

        if (!id || isNaN(id)) {
            return response.status(400).json({
                message: 'ID no valido'
            })
        }

        const data = request.only(['nombre', 'duracion', 'cancion_id', 'album_id', 'genero_id', 'artista_id'])

        const payload = await updatePostValidator.validate(data)

        const cancion = await Cancione.findBy('id', id)

        if (!cancion) {
            return response.status(404).json({
                message: 'Cancion no encontrada'
            })
        }

        const artista = await Artista.findBy('id', payload.artista_id)

        if (!artista) {
            return response.status(404).json({
                message: 'Artista no encontrado'
            })
        }

        const album = await Albumes.findBy('id ', payload.album_id)

        if (!album) {
            return response.status(404).json({
                message: 'Album no encontrado'
            })
        }

        const genero = await Genero.findBy('id', payload.genero_id)

        if (!genero) {
            return response.status(404).json({
                message: 'Genero no encontrado'
            })
        }

        cancion.nombre = payload.nombre
        cancion.duracion = payload.duracion
        cancion.album_id = payload.album_id
        cancion.genero_id = payload.genero_id
        cancion.artista_id = payload.artista_id

        await cancion.save()

        return response.status(201).json({
            message: 'Cancion actualizada exitosamente',
            cancion: cancion
        })

    }

    public async destroy({ response, params }: HttpContext) {

        const id = params.id

        const cancion = await Cancione.findBy('id', id)

        if (!cancion) {
            return response.status(404).json({
                message: 'Cancion no encontrada'
            })
        }

        await cancion.delete()

        response.status(200).json({
            message: 'Cancion eliminada exitosamente'
        })
    }

    public async index({ response }: HttpContext) {
        const cancions = await Cancione.all()

        return response.status(200).json({
            cancions: cancions
        })
    }

    public async show({ response, params }: HttpContext) {

        const id = params.id
        const cancion = await Cancione.findBy('id', id)

        if (!cancion) {
            return response.status(404).json({
                message: 'Cancion no encontrada'
            })
        }

        return response.status(200).json({
            cancion: cancion
        })
    }
}