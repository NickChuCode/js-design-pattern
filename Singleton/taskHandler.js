var repo = require('./Repo');

var myrepo = repo();

var taskHandler = function(){
    return{
        save: function(){
            myrepo.save('hi from taskHandler');
        }
    };
}

module.exports = taskHandler();
