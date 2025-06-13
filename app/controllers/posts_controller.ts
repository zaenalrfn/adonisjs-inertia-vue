import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'

export default class PostsController {
  async index({ inertia }: HttpContext) {
    const users = await Post.all()

    return inertia.render('post/index', { users })
  }
}
