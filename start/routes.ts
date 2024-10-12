/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { ro } from '@faker-js/faker'

const UsersController = () => import('#controllers/users_controller')
const ArtistasController = () => import('#controllers/artistas_controller')
const GenerosController = () => import('#controllers/generos_controller')
const CancionesController = () => import('#controllers/cancions_controller')
const PlaylistsController = () => import('#controllers/playlists_controller')
const DiscografiasController = () => import('#controllers/discografias_controller')
const ResenasController = () => import('#controllers/resenas_controller')
const ComentariosController = () => import('#controllers/comentarios_controller')
const AlbumesController = () => import('#controllers/albumes_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/login', [UsersController, 'login'])

router.resource('/artistas', ArtistasController)
router.resource('/generos', GenerosController)
router.resource('/canciones', CancionesController)
router.resource('/playlists', PlaylistsController)
router.resource('/discografias', DiscografiasController)
router.resource('/resenas', ResenasController)
router.resource('/comentarios', ComentariosController)
router.resource('/albums', AlbumesController)

