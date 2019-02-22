'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoriteStocksSchema extends Schema {
  up () {
    this.create('favorite_stocks', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('symbol').notNullable()
      table.integer('evaluationNote').notNullable()
      table.integer('amount').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('favorite_stocks')
  }
}

module.exports = FavoriteStocksSchema
