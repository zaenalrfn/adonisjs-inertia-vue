import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    full_name: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(8),
  })
)
