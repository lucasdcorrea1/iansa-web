import { routes as landin } from '../views/landing'
import { routes as auth } from '../modules/auth'


export default [
  ...auth,
  ...landin,
]