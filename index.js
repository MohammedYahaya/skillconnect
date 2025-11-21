const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require("./user")(sequelize, DataTypes);
db.Provider = require("./provider")(sequelize, DataTypes);
db.Job = require("./job")(sequelize, DataTypes);
db.Review = require("./review")(sequelize, DataTypes);

// Associations
db.User.hasOne(db.Provider, { foreignKey: "userId" });
db.Provider.belongsTo(db.User, { foreignKey: "userId" });

db.User.hasMany(db.Job, { foreignKey: "customerId" });
db.Job.belongsTo(db.User, { as: "customer", foreignKey: "customerId" });

db.Provider.hasMany(db.Job, { foreignKey: "providerId" });
db.Job.belongsTo(db.Provider, { foreignKey: "providerId" });

db.Job.hasMany(db.Review, { foreignKey: "jobId" });
db.Review.belongsTo(db.Job, { foreignKey: "jobId" });

module.exports = db;
