import User from '#models/user'
import { LogiValidator } from '#validators/login'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async index({ inertia }: HttpContext) {
    return inertia.render('Auth/login')
  }

  async store({request, response, auth}: HttpContext) {
    const {email, password} = await request.validateUsing(LogiValidator)
    const user = await User.verifyCredentials(email, password)
    if(user) {
      await auth.use('web').login(user)
      return response.redirect().toPath('/')
    }
    return response.redirect().toPath('/login')
  }
}
