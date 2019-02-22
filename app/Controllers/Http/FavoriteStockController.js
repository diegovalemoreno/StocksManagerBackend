'use strict'

const FavoriteStock = use('App/Models/FavoriteStock')
var googleStocks = require('../../dist/index');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with favoritestocks
 */
class FavoriteStockController {
  /**
   * Show a list of all favoritestocks.
   * GET favoritestocks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new favoritestock.
   * GET favoritestocks/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new favoritestock.
   * POST favoritestocks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request }) {
    const data = request.only([
      'symbol',
      'evaluationNote',
      'amount'
    ])
    console.log(params)
    const stock = await FavoriteStock.create({ ...data, user_id: params.user_id })

    return stock
  }

  /**
   * Display a single favoritestock.
   * GET favoritestocks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const stock = await FavoriteStock.findOrFail(params.id)

    googleStocks(['AAPL'], function(error, data) {
      console.log(data.toString());
    });

    // googleStocks(['TSE:WJA', 'NASDAQ:GOOG', 'AAPL'], function(error, data) {
    //   console.log(data);
    // });
    return stock;
    // let objSucessMessage = {
    //   data: stock,
    //   message: 'Olha a acao ai gente.',
    //   result: true

    // }
    // return objSucessMessage
  }

  /**
   * Render a form to update an existing favoritestock.
   * GET favoritestocks/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update favoritestock details.
   * PUT or PATCH favoritestocks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a favoritestock with id.
   * DELETE favoritestocks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = FavoriteStockController
