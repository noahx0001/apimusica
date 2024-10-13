import type { HttpContext } from '@adonisjs/core/http'
import Resena from '#models/resena'
import { createPostValidator, updatePostValidator } from '#validators/resena'
import Cancion from '#models/cancion'
import User from '#models/user'

export default class ResenasController {

    public async store({ request, response }: HttpContext) {

        const data = request.only(['resena', 'calificacion', 'user_id', 'cancion_id'])

        const payload = await createPostValidator.validate(data)

        const cancion = await Cancion.findBy('id', payload.cancion_id)

        if (!cancion) {
            return response.status(404).json({
                message: 'Cancion no encontrada'
            })
        }
        const user = await User.findBy('id', payload.user_id)

        if (!user) {
            return response.status(404).json({
                message: 'User no encontrado'
            })
        }


        const resena = new Resena()

        resena.resena = payload.resena
        resena.calificacion = payload.calificacion
        resena.user_id = payload.user_id
        resena.cancion_id = payload.cancion_id

        await resena.save()

        return response.status(201).json({
            message: 'resena creada exitosamente',
            resena: resena
        })
    }

    public async update({ request, response, params }: HttpContext) {

        const id = params.id

        if (!id || isNaN(id)) {
            return response.status(400).json({
                message: 'ID no valido'
            })
        }

        const data = request.only(['resena', 'calificacion', 'resena_id', 'user_id', 'cancion_id'])

        const payload = await updatePostValidator.validate(data)

        const resena = await Resena.findBy('id', id)

        if (!resena) {
            return response.status(404).json({
                message: 'Resena no encontrada'
            })
        }

        const cancion = await Cancion.findBy('id', payload.cancion_id)

        if (!cancion) {
            return response.status(404).json({
                message: 'Cancion no encontrada'
            })
        }

        const user = await User.findBy('id', payload.user_id)

        if (!user) {
            return response.status(404).json({
                message: 'User no encontrado'
            })
        }

        resena.resena = payload.resena
        resena.calificacion = payload.calificacion
        resena.user_id = payload.user_id
        resena.cancion_id = payload.cancion_id

        await resena.save()

        return response.status(201).json({
            message: 'resena actualizado exitosamente',
            resena: resena
        })

    }


    public async destroy({ response, params }: HttpContext) {

        const id = params.id

        const resena = await Resena.findBy('id', id)

        if (!resena) {
            return response.status(404).json({
                message: 'resena no encontrada'
            })
        }

        await resena.delete()

        response.status(200).json({
            message: 'resena eliminada exitosamente'
        })
    }

    public async index({ response }: HttpContext) {
        const resenas = await Resena.all()

        return response.status(200).json({
            resenas: resenas
        })
    }

    public async show({ response, params }: HttpContext) {

        const id = params.id
        const resena = await Resena.findBy('id', id)

        if (!resena) {
            return response.status(404).json({
                message: 'Resena no encontrada'
            })
        }

        return response.status(200).json({
            resena: resena
        })
    }
}