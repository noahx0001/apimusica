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
import { middleware } from '#start/kernel'

const UsersController = () => import('#controllers/users_controller')
const ArtistasController = () => import('#controllers/artistas_controller')
const GenerosController = () => import('#controllers/generos_controller')
const CancionesController = () => import('#controllers/cancions_controller')
const PlaylistsController = () => import('#controllers/playlists_controller')
const DiscografiasController = () => import('#controllers/discografias_controller')
const ResenasController = () => import('#controllers/resenas_controller')
const ComentariosController = () => import('#controllers/comentarios_controller')
const AlbumesController = () => import('#controllers/albumes_controller')
const PlaylistCancionController = () => import('#controllers/playlists_canciones_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/login', [UsersController, 'login']) // Ruta hecha para probar y obtener token

router.group(() => {
  router.resource('/artistas', ArtistasController) // Ruta hecha para probar
  router.resource('/generos', GenerosController) // Ruta hecha para probar
  router.resource('/canciones', CancionesController) // Ruta hecha para probar
  router.resource('/discografias', DiscografiasController) // Ruta hecha para probar
  router.resource('/albums', AlbumesController) // Ruta hecha para probar
  router.resource('/comentarios', ComentariosController) // Ruta hecha para probar
  router.resource('/resenas', ResenasController) // Ruta hecha para probar
  router.resource('/playlistsCanciones', PlaylistCancionController) // Ruta hecha para probar
  router.resource('/playlists', PlaylistsController) // Ruta hecha para probar
}).use(middleware.auth({ guards: ['api'] })) // Rutas protegidas con JWT token









