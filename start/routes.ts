/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const RegisterContollersController = () => import('#controllers/Auth/register_contollers_controller')
router.on('/').renderInertia('home')

router
  .group(() => {
    router.get('register', [RegisterContollersController, 'index']).as('auth.register')
    router.post('register', [RegisterContollersController, 'store']).as('auth.register.store')
  })
  .prefix('/auth')
  .use(middleware.guest())
