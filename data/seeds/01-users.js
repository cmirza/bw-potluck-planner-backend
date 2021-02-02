
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "dustin", password: "$2a$14$FV2ri2ro.RsB7bS4S4DSLOrEVN0G43cREstLEiRpRIRNskLOhjlnW" }, // pass "1234"
        { username: "austin", password: "$2a$14$7W86dbeb9F5PUR/8R2d.ze5UIbq6Pr4bi4BeaKel6VDEfwtOl8BQq" }, // pass "password"
        { username: "jackson", password: "$2a$14$c8RLQNVaglKp.5ZK6DrTXem4pmZQfAaD3MNDTnPzB/ZeGeuerYTca" }, // pass "abcdefg"
        { username: "gabe", password: "$2a$14$9ob9W8vKTvO3YDigbNlvXux9SoTQPGHXyOcQH80qMsqWUzoSDfAqG" } // pass "secret"
      ]);
    });
};
