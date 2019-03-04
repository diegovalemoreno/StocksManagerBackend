'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('passwords', 'ForgotPasswordController.store')
Route.get('stocksPrice/:symbol', 'FavoriteStockController.getPriceFromSymbol')
Route.group(() => {
  Route.resource('stocks', 'FavoriteStockController').apiOnly()
}) //.middleware(['auth'])

Route.put('passwords', 'ForgotPasswordController.update')
Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})
