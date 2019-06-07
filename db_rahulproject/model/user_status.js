module.exports = function (sequelize, DataTypes) {
 return sequelize.define('user_status', {
	startedDateUser: {
	type: DataTypes.DATE,
		allowNull: false,
	},
	endedDateUser: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	completed: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true
	},
});
};