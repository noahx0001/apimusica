/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import User from '#models/user'
import Cancion from '#models/cancion'
import Playlist from '#models/playlist'
import Discografia from '#models/discografia'
import Genero from '#models/genero'
import Resena from '#models/resena'
import Comentario from '#models/comentario'
import Artista from '#models/artista'


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/login', 'users_controller.login')


