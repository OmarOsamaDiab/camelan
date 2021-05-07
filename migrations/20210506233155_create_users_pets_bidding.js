exports.up = function (knex) {
    return knex.schema
        .createTable("user_pet_bidding", (table) => {
            table.increments('id').primary()

            table.integer('petId').unsigned();
            table.integer('cost').unsigned();
            table.integer('buyer').unsigned();

            table.foreign('buyer')
                .references('user.id')
                .onDelete('SET NULL')
                .onUpdate('SET NULL')
            table.foreign('petId')
                .references('pet.id')
                .onDelete('SET NULL')
                .onUpdate('SET NULL')
            table.timestamps(true, true)
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("user_pet_bidding")
};