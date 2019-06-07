module.exports = function (sequelize, DataTypes) {
 return sequelize.define('courses', {
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
		validate: {
			len: [1, 250]
		}
	},	 
	startDateCourse: {
	type: DataTypes.DATE,
		allowNull: false,
	},
	endDateCourse: {
		type: DataTypes.DATE,
		allowNull: false,
	}	
});
};