module.exports = function(sequelize, DataTypes) {
    let Hero = sequelize.define("Hero", {
      name: DataTypes.STRING,
      level: DataTypes.INTEGER,
      class: DataTypes.STRING,
     
    },{
        tableName: "Heroes"
    });
    return Hero;
  };