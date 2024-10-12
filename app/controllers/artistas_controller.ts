import type { HttpContext } from '@adonisjs/core/http'
import Artista from '#models/artista'
import { createPostValidator, updatePostValidator } from '#validators/artista'
export default class ArtistasController {

    public async store({ request, response }: HttpContext) {

        const data = request.only(['nombre', 'nacionalidad'])

        const payload = await createPostValidator.validate(data)

        const artista = new Artista()

        artista.nombre = payload.nombre
        artista.nacionalidad = payload.nacionalidad

        await artista.save()

        return response.status(201).json({
            message: 'Artista creado exitosamente',
            artista: artista
        })
    }

    public async update({ request, response, params }: HttpContext) {

        const id = params.id

        const data = request.only(['nombre', 'nacionalidad'])

        const payload = await updatePostValidator.validate(data)

        if (!id || isNaN(id)) {
            return response.status(400).json({
                message: 'ID no valido'
            })
        }

        const artista = await Artista.findBy('id', id)


        if (!artista) {
            return response.status(404).json({
                message: 'Artista no encontrado'
            })
        }

        artista.nombre = payload.nombre
        artista.nacionalidad = payload.nacionalidad

        await artista.save()

        return response.status(201).json({
            message: 'Artista actualizado exitosamente',
            artista: artista
        })

    }

    public async destroy({ response, params }: HttpContext) {

        const id = params.id

        const artista = await Artista.findBy('id', id)

        if (!artista) {
            return response.status(404).json({
                message: 'Artista no encontrado'
            })
        }

        await artista.delete()

        response.status(200).json({
            message: 'Artista eliminado exitosamente'
        })
    }

    public async index({ response }: HttpContext) {
        const artistas = await Artista.all()

        return response.status(200).json({
            artistas: artistas
        })
    }

    public async show({ response, params }: HttpContext) {

        const id = params.id
        const artista = await Artista.findBy('id', id)

        if (!artista) {
            return response.status(404).json({
                message: 'Artista no encontrado'
            })
        }

        return response.status(200).json({
            artista: artista
        })
    }

}