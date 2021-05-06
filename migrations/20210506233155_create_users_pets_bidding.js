exports.up = function (knex) {
    return knex.schema
        .createTable("user_pet_bidding", (table) => {
            table.increments('id').primary()

            table.integer('petId').unsigned().notNullable();
            table.integer('cost').unsigned().notNullable();
            table.integer('buyer').unsigned().notNullable();

            table.foreign('buyer')
                .references('user.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            table.foreign('petId')
                .references('pet.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            table.timestamps(true, true)
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("user_pet_bidding")
};