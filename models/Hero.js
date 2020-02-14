module.exports = function(sequelize, DataTypes) {
    let Hero = sequelize.define("Hero", {
      name: DataTypes.STRING,
      level: DataTypes.INTEGER
    },{
        tableName: "Heroes"
    });
    return Hero;
  };