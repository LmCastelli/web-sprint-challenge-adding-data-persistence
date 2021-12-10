
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('project_id');
            table.text('project_name', 60)
                .notNullable();
            table.text('project_description', 150)
            table.text('project_completed')
                .defaultTo(0)
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.text('resource_name', 60)
                .notNullable()
                .unique()
            table.text('resource_description',150)
        })
        .createTable()
}

exports.down = function (knex) {
    return knex.schema
}