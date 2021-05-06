exports.up = function (knex) {
    return knex.schema
        .createTable("pet", (table) => {
            table.increments('id').primary()
            table.text("description").nullable()
            table.timestamps(true, true)
            table.integer('owner').unsigned().notNullable();
            table.foreign('owner')
                .references('user.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("pet")
};