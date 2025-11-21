module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define("Job", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        customerId: DataTypes.INTEGER,
        providerId: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        status: { 
            type: DataTypes.STRING, 
            defaultValue: "pending"  // pending, accepted, rejected, completed 
        }
    });

    return Job;
};
