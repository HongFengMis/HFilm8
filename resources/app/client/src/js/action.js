///////////////////////////////////// Action ///////////////////////////////////////////
//run 启动入口
Action.run = function(page, wait, fn){
    $("#Loader").css("visibility", "visible");
    setTimeout(function(){
        Room.ppt({id:["Loader" , page] , mov:["mv-fade-out" , "mv-fade-in"]}, function(){
            if(fn) fn();
        });
    }, wait);
};

Action.Nav = function(){
    Room.ppt({id:[Room.id, "Nav"] , mov:["fadeOut" , "fadeIn"]});
};
Action.Video = function(id){
    Room.ppt({id:[Room.id, "Video"] , mov:["fadeOut" , "fadeIn"]});
};
Action.VideoEnd = function(id){
    Room.ppt({id:[Room.id, "Nav"] , mov:["fadeOut" , "fadeIn"]});
};

IOW.run.play = function(){
    console.log(Room.id);
    if(Room.id!="Video" && Dom.GuestMode){
        Action.Video();
        Dom.Video.play(0);
    }
};