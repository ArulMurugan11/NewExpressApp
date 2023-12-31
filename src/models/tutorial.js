module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("Tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'tutorials',
  });

  return Tutorial;
};
