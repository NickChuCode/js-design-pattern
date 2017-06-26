var repoFactory = function(){
    this.getRepo = function(repoType){
        if(repoType === 'task'){
            var taskRepo = require('./taskRepository')();
            return taskRepo;
        }
        if(repoType === 'user'){
            var userRepo = require('./userRepository')();
            return userRepo;
        }
        if(repoType === 'proj'){
            var projRepo = require('./projRepository')();
            return projRepo;
        }
    }
};

module.exports = new repoFactory; //话说，为什么new的时候不在后面加括号呢？
