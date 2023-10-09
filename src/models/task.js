module.exports = function taskSchema(sequelize, DataType) {
    const Task = sequelize.define('Task', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
        },
        description: {
            type: DataType.TEXT,
            allowNull: true,
        },
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'tasks',
    });
    Task.associate = function mapRelation() {
    };
    return Task;
};
