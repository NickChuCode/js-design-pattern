var Task = require('./task');
var repoFactory = require('./repoFactory');

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));


var user = repoFactory.getRepo('user').get(1);
var proj = repoFactory.getRepo('proj').get(1);

task1.user = user;
task1.proj = proj;

console.log(task1);
task1.save();
