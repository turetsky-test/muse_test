module.exports = function (sequelize, DataTypes) {
 return sequelize.define('comment', {
	message: {
		type: DataTypes.STRING,
		validate: {
			len: [1, 500]
		}
	}	
});

};