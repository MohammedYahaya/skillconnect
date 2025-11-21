module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define("Provider", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    serviceType: DataTypes.STRING,
    bio: DataTypes.TEXT,
    location: DataTypes.STRING,
    priceRange: DataTypes.STRING,
    image: DataTypes.STRING
  });

  return Provider;
};
