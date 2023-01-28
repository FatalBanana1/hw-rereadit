"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Subscription extends Model {
		static associate(models) {
			Subscription.belongsTo(models.Subrereadit, {
				foreignKey: "subId",
				onDelete: "CASCADE"
			});
			Subscription.belongsTo(models.User, {
				foreignKey: "userId",
				onDelete: "CASCADE"
			});
		}
	}
	Subscription.init(
		{
			subId: {
				type: DataTypes.INTEGER,
				references: {
					model: "Subrereadits"
				},
				onDelete: "CASCADE"
			},
			userId: {
				type: DataTypes.INTEGER,
				references: {
					model: "Users"
				},
				onDelete: "CASCADE"
			},
			mod: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			}
		},
		{
			sequelize,
			modelName: "Subscription"
		}
	);
	return Subscription;
};
