var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function (task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function (task) {
            console.log('saving Task: ' + task.name);
        }
    }
}();

var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});
//可以看到，这里完成的是task完成以及完成后一系列动作，可以看到调用非常messy，有很多的逻辑暴露在外面
TaskService.complete(myTask);
if (myTask.completed == true) {
    TaskService.setCompleteDate(myTask);
    TaskService.notifyCompletion(myTask, myTask.user);
    TaskService.save(myTask);
}
