import { routes as landing } from '../views/landing'
import { routes as auth } from '../modules/auth'

export default [
  ...auth,
  ...landing
]
