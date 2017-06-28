var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority){
    Task.call(this, name);//类似ES6中的super
    this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);//复制一个Task的prototype，从而不会对Task的prototype造成污染
UrgentTask.prototype.notify = function(){
    console.log('notifying vip people');
};
UrgentTask.prototype.save = function(){
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);//复用了Task的save方法
}

var ut = new UrgentTask('This is mytask', 1);
console.log(ut);
ut.complete();
ut.save();
