exports.up = function(knex) {
    return knex.schema.createTable('data', (table) => {
      table.increments();
      table.text('type').notNullable();
      table.text('title').notNullable();
      table.text('dato').notNullable();
      table.text('link').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfNotExists()('material');
  };
  