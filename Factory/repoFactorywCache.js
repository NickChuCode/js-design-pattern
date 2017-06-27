var repoFactory = function () {
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            if (this.taskRepo) {
                console.log('Retrieving from cache');
                return this.taskRepo;
            } else {
                this.taskRepo = require('./taskRepository')();
                //这里放一些config的代码
                return this.taskRepo;
            }

        }
        if (repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }
        if (repoType === 'proj') {
            var projRepo = require('./projRepository')();
            return projRepo;
        }
    }
};

module.exports = new repoFactory; //话说，为什么new的时候不在后面加括号呢？这个问题已经解决，见笔记P256~257最下方
