import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterContollersController {
  async index({ inertia }: HttpContext) {
    return inertia.render('Auth/register')
  }
}
