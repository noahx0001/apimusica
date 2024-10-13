import type { HttpContext } from '@adonisjs/core/http'
import Comentario from '#models/comentario'
import { createPostValidator, updatePostValidator } from '#validators/comentario'
import Albumes from '#models/albume'
import User from '#models/user'

export default class ComentariosController {
    public async store({ request, response }: HttpContext) {

        const data = request.only(['comentario', 'user_id', 'album_id'])

        const payload = await createPostValidator.validate(data)

        const album = await Albumes.findBy('id', payload.album_id)

        if (!album) {
            return response.status(404).json({
                message: 'Album no encontrado'
            })
        }
        const user = await User.findBy('id', payload.user_id)

        if (!user) {
            return response.status(404).json({
                message: 'User no encontrado'
            })
        }


        const comentario = new Comentario()

        comentario.comentario = payload.comentario
        comentario.user_id = payload.user_id
        comentario.album_id = payload.album_id

        await comentario.save()

        return response.status(201).json({
            message: 'Comentario creado exitosamente',
            comentario: comentario
        })
    }

    public async update({ request, response, params }: HttpContext) {

        const id = params.id

        if (!id || isNaN(id)) {
            return response.status(400).json({
                message: 'ID no valido'
            })
        }

        const data = request.only(['comentario', 'calificacion', 'user_id', 'album_id'])

        const payload = await updatePostValidator.validate(data)

        const comentario = await Comentario.findBy('id', id)

        if (!comentario) {
            return response.status(404).json({
                message: 'Comentario no encontrado'
            })
        }

        const album = await Albumes.findBy('id', payload.album_id)

        if (!album) {
            return response.status(404).json({
                message: 'Album no encontrado'
            })
        }

        const user = await User.findBy('id', payload.user_id)

        if (!user) {
            return response.status(404).json({
                message: 'User no encontrado'
            })
        }

        comentario.comentario = payload.comentario
        comentario.user_id = payload.user_id
        comentario.album_id = payload.album_id

        await comentario.save()

        return response.status(201).json({
            message: 'Comentario actualizado exitosamente',
            comentario: comentario
        })

    }


    public async destroy({ response, params }: HttpContext) {

        const id = params.id

        const comentario = await Comentario.findBy('id', id)

        if (!comentario) {
            return response.status(404).json({
                message: 'Comentario no encontrada'
            })
        }

        await comentario.delete()

        response.status(200).json({
            message: 'Comentario eliminada exitosamente'
        })
    }

    public async index({ response }: HttpContext) {
        const comentarios = await Comentario.all()

        return response.status(200).json({
            comentarios: comentarios
        })
    }

    public async show({ response, params }: HttpContext) {

        const id = params.id
        const comentario = await Comentario.findBy('id', id)

        if (!comentario) {
            return response.status(404).json({
                message: 'Comentario no encontrada'
            })
        }

        return response.status(200).json({
            comentario: comentario
        })
    }
}