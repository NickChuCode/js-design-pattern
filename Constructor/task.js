var Task = function (name) {
    this.name = name;
    this.completed = false;

    this.save = function () {
        console.log('saving task: ' + this.name);
    }
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

var task1 = new Task('create a demo for constructor');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singleton');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
