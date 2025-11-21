module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("Review", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        jobId: DataTypes.INTEGER,
        rating: DataTypes.INTEGER, // 1–5
        comment: DataTypes.TEXT
    });

    return Review;
};
