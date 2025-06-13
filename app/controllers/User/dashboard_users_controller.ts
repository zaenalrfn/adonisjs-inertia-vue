import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class DashboardUsersController {
  async index({ inertia, auth }: HttpContext) {
    return inertia.render('user/dashboard')
  }
}
