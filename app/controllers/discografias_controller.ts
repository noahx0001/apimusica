import type { HttpContext } from '@adonisjs/core/http'
import Discografia from '#models/discografia'
import { createPostValidator, updatePostValidator } from '#validators/discografia'

export default class DiscografiasController {
    public async store({ request, response }: HttpContext) {

        const data = request.only(['nombre', 'telefono', 'direccion'])

        const payload = await createPostValidator.validate(data)

        const discografia = new Discografia()

        discografia.nombre = payload.nombre
        discografia.telefono = payload.telefono
        discografia.direccion = payload.direccion

        await discografia.save()

        return response.status(201).json({
            message: 'Discografia creado exitosamente',
            discografia: discografia
        })
    }

    public async update({ request, response, params }: HttpContext) {

        const id = params.id

        const data = request.only(['nombre', 'telefono', 'direccion'])

        const payload = await updatePostValidator.validate(data)

        if (!id || isNaN(id)) {
            return response.status(400).json({
                message: 'ID no valido'
            })
        }

        const discografia = await Discografia.findBy('id', id)


        if (!discografia) {
            return response.status(404).json({
                message: 'Discografia no encontrado'
            })
        }

        discografia.nombre = payload.nombre
        discografia.telefono = payload.telefono
        discografia.direccion = payload.direccion

        await discografia.save()

        return response.status(201).json({
            message: 'Discografia actualizado exitosamente',
            discografia: discografia
        })

    }

    public async destroy({ response, params }: HttpContext) {

        const id = params.id

        const discografia = await Discografia.findBy('id', id)

        if (!discografia) {
            return response.status(404).json({
                message: 'Discografia no encontrado'
            })
        }

        await discografia.delete()

        response.status(200).json({
            message: 'Discografia eliminado exitosamente'
        })
    }

    public async index({ response }: HttpContext) {
        const discografias = await Discografia.all()

        return response.status(200).json({
            discografias: discografias
        })
    }

    public async show({ response, params }: HttpContext) {

        const id = params.id
        const discografia = await Discografia.findBy('id', id)

        if (!discografia) {
            return response.status(404).json({
                message: 'Discografia no encontrado'
            })
        }

        return response.status(200).json({
            discografia: discografia
        })
    }
}