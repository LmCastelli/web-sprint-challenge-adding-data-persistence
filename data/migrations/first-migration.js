
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
        .createTable('tasks', table => {
            table.increments('task_id')
            table.text('task_description', 150)
                .notNullable()
            table.text('task_notes',100)
            table.text('task_completed')
                .defaultTo(0)
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
        })
        .createTable('project_resources', table => {
            table.increments('project_resource_id')
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
            table.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
        })
}

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
}