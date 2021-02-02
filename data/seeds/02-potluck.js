
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('potluck').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('potluck').insert([
        { name: "potluck 1", date: "1/29/2021", time: "1:30PM", items: "dish1, dish2, dish3" },
        { name: "potluck 2", date: "1/30/2021", time: "2:30PM", items: "dish1, dish2" }
      ]);
    });
};
