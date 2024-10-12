import type { HttpContext } from '@adonisjs/core/http'
import Genero from '#models/genero'
import { createPostValidator, updatePostValidator } from '#validators/genero'


export default class GenerosController {
    public async store({ request, response }: HttpContext) {

        const data = request.only(['nombre', 'descripcion'])

        const payload = await createPostValidator.validate(data)

        const genero = new Genero()

        genero.nombre = payload.nombre
        genero.descripcion = payload.descripcion

        await genero.save()

        return response.status(201).json({
            message: 'Genero creado exitosamente',
            genero: genero
        })
    }

    public async update({ request, response, params }: HttpContext) {

        const id = params.id

        const data = request.only(['nombre', 'descripcion'])

        const payload = await updatePostValidator.validate(data)

        if (!id || isNaN(id)) {
            return response.status(400).json({
                message: 'ID no valido'
            })
        }

        const genero = await Genero.findBy('id', id)


        if (!genero) {
            return response.status(404).json({
                message: 'Genero no encontrado'
            })
        }

        genero.nombre = payload.nombre
        genero.descripcion = payload.descripcion

        await genero.save()

        return response.status(201).json({
            message: 'Genero actualizado exitosamente',
            genero: genero
        })

    }

    public async destroy({ response, params }: HttpContext) {

        const id = params.id

        const genero = await Genero.findBy('id', id)

        if (!genero) {
            return response.status(404).json({
                message: 'Genero no encontrado'
            })
        }

        await genero.delete()

        response.status(200).json({
            message: 'Genero eliminado exitosamente'
        })
    }

    public async index({ response }: HttpContext) {
        const generos = await Genero.all()

        return response.status(200).json({
            generos: generos
        })
    }

    public async show({ response, params }: HttpContext) {

        const id = params.id
        const genero = await Genero.findBy('id', id)

        if (!genero) {
            return response.status(404).json({
                message: 'Genero no encontrado'
            })
        }

        return response.status(200).json({
            genero: genero
        })
    }
}