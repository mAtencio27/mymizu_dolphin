exports.up = function(knex) {
    return knex.schema.createTable('Milestones', function(table) {
        table.increments();
        table.string('Name');
        table.string('Type');
        table.string('UnitOfMeasure');
        table.decimal('GoalValue', null);
        table.string('Message');
        table.timestamps();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.hasTable('Milestones').then(function(exists) {
        if(exists){
            return knex.schema.dropTable('Milestones');
        }
    })
  };
