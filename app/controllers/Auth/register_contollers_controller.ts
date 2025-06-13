import User from '#models/user'
import { registerValidator } from '#validators/register'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterContollersController {
  async index({ inertia }: HttpContext) {
    return inertia.render('Auth/register')
  }

  async store({request, response, auth}: HttpContext) {
    const data = await request.validateUsing(registerValidator)

    const user = await User.create(data)

    await auth.use('web').login(user)

    return response.redirect().toPath('/')
  }
}
