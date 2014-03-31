exports.up = function(next) {
    this.createTable('projects', {
        id: {
            type: "number",
            primary: true,
            serial: true
        },
        name: {
            type: "text",
            required: true
        },
        url: {
            type: "text",
            required: true
        },
        coverage_url: {
            type: "text",
            required: true,
        }
    }, next);
};

exports.down = function(next) {
    this.dropTable('projects', next);
};