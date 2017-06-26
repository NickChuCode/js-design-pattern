//一般的调用方法
var Task = require('./task');
var taskRepo = require('./taskRepository')();
var userRepo = require('./userRepository')();
var projRepo = require('./projRepository')();

var task1 = new Task(taskRepo.get(1));

var user = userRepo.get(1);
var proj = projRepo.get(1);

task1.user = user;
task1.proj = proj;

console.log(task1);

task1.save();
