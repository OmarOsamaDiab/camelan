exports.up = function (knex) {
    return knex.schema
        .createTable("pet", (table) => {
            table.increments('id').primary()
            table.text("description").nullable()
            table.integer('owner').unsigned();

            table.foreign('owner')
                .references('user.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')

            table.timestamps(true, true)
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("pet")
};