
var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/data/basic-sqlite-database.sqlite'
});

var db = {};
db.user = sequelize.import(__dirname + '/model/user.js');
db.admin = sequelize.import(__dirname + '/model/admin.js');
db.courses = sequelize.import(__dirname + '/model/courses.js');
db.modules = sequelize.import(__dirname + '/model/modules.js');
db.subsection = sequelize.import(__dirname + '/model/subsection.js');
db.comment = sequelize.import(__dirname + '/model/comment.js');
db.user_status = sequelize.import(__dirname + '/model/user_status.js');
db.courses_assigned_to_user = 
sequelize.import(__dirname + '/model/courses_assigened_to_user.js');
db.token = sequelize.import(__dirname + '/model/token.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// association of module and courses
db.modules.belongsTo(db.courses);
db.courses.hasMany(db.modules);
// association of subsection and module
db.subsection.belongsTo(db.modules);
db.modules.hasMany(db.subsection);

// association of user and courses
db.user.belongsToMany(db.courses,  { through: db.courses_assigned_to_user });
db.courses.belongsToMany(db.user, { through: db.courses_assigned_to_user });
// comment of user to subsection 
db.comment.belongsTo(db.subsection);
db.comment.belongsTo(db.user);
db.subsection.hasMany(db.comment);
db.user.hasMany(db.comment);

// user status model 
db.user_status.belongsTo(db.courses);
db.user_status.belongsTo(db.modules);
db.user_status.belongsTo(db.subsection);
db.user_status.belongsTo(db.user);
   db.courses.hasMany(db.user_status);
   db.modules.hasMany(db.user_status);
db.subsection.hasMany(db.user_status);
      db.user.hasMany(db.user_status);



db.sequelize.sync({
	// force: true
}).then(function() {
	console.log('Everything is synced');

db.admin.create({'email': 'rahulgupt2@gmail.com',
'password': 'Rahul@1234'}).then(function (loggedAdmin) {
	console.log(loggedAdmin.toJSON());
}, function (e) {
	console.log(e);
});
});


module.exports = db;