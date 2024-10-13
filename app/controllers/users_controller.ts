import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class UsersController {
    public async login({ request, response }: HttpContext) {

        const { email, password } = request.only(['email', 'password'])

        const user = await User.verifyCredentials(email, password)

        const token = await User.accessTokens.create(user)

        return response.status(200).json({
            message: 'Autenticación exitosa',
            type: "bearer ",
            token: token,
        })
    }
}