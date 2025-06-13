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
const AuthController = () => import('#controllers/Auth/auth_controller')
const DashboardUsersController = () => import('#controllers/User/dashboard_users_controller')
router.on('/').renderInertia('home')

router
  .group(() => {
    router.get('register', [RegisterContollersController, 'index']).as('auth.register')
    router.post('register', [RegisterContollersController, 'store']).as('auth.register.store')
    router.get('login', [AuthController, 'index']).as('auth.login')
    router.post('login', [AuthController, 'store']).as('auth.login.store')
  })
  .prefix('/auth')
  .use(middleware.guest())


router.group(() => {
  router.get('/user/dashboard', [DashboardUsersController, 'index']).as('dashboard.users.index')
})
.use(middleware.auth())
