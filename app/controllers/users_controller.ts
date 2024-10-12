import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class UsersController {
    public async login({ request, response }: HttpContext) {

        const { email, password } = request.only(['email', 'password'])

        const user = await User.findBy('email', email)

        if (!user) {
            return response.status(401).json({
                message: 'Credenciales inválidas'
            })
        }

        const isPasswordValid = await hash.verify(user.password, password)

        if (!isPasswordValid) {
            return response.status(401).json({
                message: 'Credenciales inválidas'
            })
        }

        const token = await User.accessTokens.create(user)

        return response.status(200).json({
            message: 'Autenticación exitosa',
            type: "bearer ",
            token: token,
            user: user
        })
    }
}