
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Milestones').del()
    .then(function () {
      // Inserts seed entries
      return knex('Milestones').insert([
        {Name: 'Human Body', Type: 'Water', UnitOfMeasure: 'Liters', GoalValue: 45.00, Message: 'The average human body at 72kg, has 45L of water in it!'},
        {Name: 'Bathtub', Type: 'Water', UnitOfMeasure: 'Liters', GoalValue: 100.00, Message: "You've saved a bathtub's volume of water!"},
        {Name: 'Shower', Type: 'Water', UnitOfMeasure: 'Liters', GoalValue: 150.00, Message: 'A 10 minute shower uses approximately 150L of water!'},
        {Name: 'Hottub', Type: 'Water', UnitOfMeasure: 'Liters', GoalValue: 719.00, Message: "Happiness is a warm hot tub."},
        {Name: 'Serving of Beef', Type: 'CO2', UnitOfMeasure: 'kg', GoalValue: 6.00, Message: 'A serving of beef is equivalent to 6kg of CO2'},
        {Name: 'Tennis Shoes', Type: 'CO2', UnitOfMeasure: 'kg', GoalValue: 14.00, Message: "Tennis shoes have a carbon 'footprint' ;) of 14kg!"},
        {Name: 'Iphone', Type: 'CO2', UnitOfMeasure: 'kg', GoalValue: 78.00, Message: "What do you call an IPhone's battery? Apple Juice!!"},
        {Name: 'Gardening Can', Type: 'Plastic', UnitOfMeasure: 'kg', GoalValue: 0.50, Message: "Green plastic watering can!"},
        {Name: 'Reusable straw', Type: 'Money', UnitOfMeasure: 'Yen', GoalValue: 2000, Message: "Save the turtles!"},
        {Name: 'Tote Bag', Type: 'Money', UnitOfMeasure: 'Yen', GoalValue: 3000, Message: "Bag for life!"},
        {Name: 'Hydroflask', Type: 'Money', UnitOfMeasure: 'Yen', GoalValue: 6000, Message: "Saving the environment is thirsty work!"},
        {Name: 'Reusable straw', Type: 'Money', UnitOfMeasure: 'Yen', GoalValue: 2000, Message: "Save the turtles!"},
        {Name: 'Bicycle', Type: 'Money', UnitOfMeasure: 'Yen', GoalValue: 25000, Message: "Re-cycling for the future!"},
        {Name: 'Electric Car', Type: 'Money', UnitOfMeasure: 'Yen', GoalValue: 300000, Message: "Driving our way to a better future!"}
      ]);
    });
};
