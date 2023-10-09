module.exports = function loginSchema(sequelize, DataType) {
    const Login = sequelize.define('Login', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userName: {
            type: DataType.STRING,
            allowNull: false,
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'logins',
    });
    Login.associate = function mapRelation() {
    };
    return Login;
};
