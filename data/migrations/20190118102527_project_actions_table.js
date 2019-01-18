
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project_actions_table', tbl => {
      tbl.increments()
      tbl.integer('projects_id').unsigned().references('id').inTable('projects')
      tbl.integer('actions_id').unsigned().references('id').inTable('actions')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project_actions_table');
};
