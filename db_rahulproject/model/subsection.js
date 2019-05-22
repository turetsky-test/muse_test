module.exports = function (sequelize, DataTypes) {
 return sequelize.define('subsection', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [1, 250]
		}
	},
	startDate: {
	type: DataTypes.DATE,
		allowNull: false,
	},
	endDate: {
		type: DataTypes.DATE,
		allowNull: false,
	}	
});

};