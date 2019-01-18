
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments()
      tbl.string('description', 128).notNullable()
      tbl.text('notes').notNullable()
      tbl.boolean('completed').defaultTo(false)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
