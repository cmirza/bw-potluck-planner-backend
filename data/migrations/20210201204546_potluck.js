
exports.up = function(knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments()
            table.string('username', 128).notNullable().unique().index()
            table.string('password', 128).notNullable()
        })

        .createTable('potluck', table => {
            table.increments()
            table.string('name', 128).notNullable()
            table.date('date').notNullable()
            table.time('time', ).notNullable()
            table.string('items', 256).notNullable()
        })

        .createTable('user_data', table => {
            table.increments()
            table.integer('potluck_id')
                .unsigned()
                .references('id')
                .inTable('potluck')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table.text('role', 128).notNullable()
            table.text('guest_items', 256)
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('profile')
        .dropTableIfExists('potluck')
        .dropTableIfExists('users')
};
