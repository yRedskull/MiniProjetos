import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Login from './Validation/Login'
import Register from './Validation/Register'

const login = new Login('.form-login')
const register = new Register('.form-register')

login.init()
register.init()


//import './assets/css/style.css'

