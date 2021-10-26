exports.up = function(knex) {
    return knex.schema.createTable('MilestoneUsers', function(table) {
        table.increments();
        table.int('MilestoneId').inTable('Migrations').references('id');
        table.int('UserId');
        table.timestamps();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.hasTable('MilestoneUsers').then(function(exists) {
        if(exists){
            return knex.schema.dropTable('MilestoneUsers');
        }
    })
  };