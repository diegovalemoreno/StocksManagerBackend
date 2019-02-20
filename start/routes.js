'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.post('users','UserController.store')
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
