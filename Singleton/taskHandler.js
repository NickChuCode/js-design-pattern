var myrepo = require('./Repo');

var taskHandler = function(){
    return{
        save: function(){
            myrepo.save('hi from taskHandler');
        }
    };
}

module.exports = taskHandler();
