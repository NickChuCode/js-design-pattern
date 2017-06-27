var TaskRepo = (function(){
    var taskRepo;
    function createRepo(){
        var tRepo = new Object('Task');
        return tRepo;
    }
    return{
        getInstance: function(){
            if(!taskRepo){
                taskRepo = createRepo();
            }
            return taskRepo;
        }
    };
})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if(repo1 === repo2){
    console.log('Same Instance');
}
