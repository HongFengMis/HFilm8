///////////////////////////////////// Room ///////////////////////////////////////////

////房间规范
// (Room)go房间离开，come房间进来，ppt同步离开和进来
// (Room)hide暂时隐藏，会关闭run程序（stop程序）; show开始显示，会运行run程序
// (Rooms)come_before:进来前，coming：进来时，come_after:进来后；go_before：离开前，going：离开时,go_after：离开后;
// (Rooms)ppt同步后的循序 1.come_before , 2.go_before , 3.going , 4.coming , 5.come_after , 6.go_after
// (Rooms)run运行的程序，stop停止的程序
// (Rooms)act点击等事件，io事件


///////////////////////////////////// rooms ///////////////////////////////////////////

////Nav
Rooms.Nav = {};
Rooms.Nav.act = function(){
    // $("#Nav").click(function(){
    //     Action.Video();
    //     Dom.Video.play(0);
    // });
};
Rooms.Nav.io = function(){

    socket.on("reload", function(){
        location.reload();
    });

    socket.on("nav", function(){
        Action.Nav();
    });

    socket.on("GuestMode", function(){
        Dom.GuestMode = 1;
    });
    socket.on("GuestModeEnd", function(){
        Dom.GuestMode = 0;
    });

    // socket.on("video", function(){
    //     Action.Video();
    //     Dom.Video.play(0);
    // });
    //
    // socket.on("stop", function(){
    //     if(Room.id!="Video") Action.Video();
    //     Dom.Video.pause();
    // });
    // socket.on("play", function(){
    //     if(Room.id!="Video") Action.Video();
    //     Dom.Video.play();
    // });
    // socket.on("end", function(){
    //     Action.Nav();
    //     Dom.Video.pause();
    // });
    //
    // socket.on("vol", function(json){
    //     Dom.Video.m[0].volume = json.num/100;
    // });
    //
    // socket.on("time", function(json){
    //     Dom.Video.m[0].currentTime = json.num;
    // });
    //
    // socket.on("filmLength", function(){
    //     IO.emit({to:"guide" , key:"Film1_length", val:Dom.Video.m[0].duration})
    // });

};

////Video
Rooms.Video = {};
Rooms.Video.dom = function(){
    Dom.Video = new Media("#Video video", {room:"Video"});

	Dom.Video.end(function(v){
	    v.gotoEnd();
	});
};
Rooms.Video.act = function(){
    ///$("#Video").click(function(){
        //////Action.Nav();
    ///});
};
// Rooms.Video.go_after = function(next){
// 	Dom.Video.pause();
//     if(next) next();
// };

