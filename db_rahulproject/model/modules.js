module.exports = function (sequelize, DataTypes) {
 return sequelize.define('modules', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [1, 250]
		}
	}
});
};