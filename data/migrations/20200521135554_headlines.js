exports.up = function (knex) {
    return knex.schema.createTable("headlines", hl => {
      hl.increments();
  
      hl.string("title", 255).notNullable();
    });
  };
  
  exports.down = function (knex) {
    // undo the operation in up
    return knex.schema.dropTableIfExists("headlines");
  };
  