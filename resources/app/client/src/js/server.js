Url.fs  = "resources/";//fs的时候的相对地址
Url.upload = "../uploads/";

var Progress = function(num){
    Log("$$$$【Server.loader】目前完成："+num+"%");
    if(num==100) num=99;
    Dom._loader.html("正在更新资料中，已完成："+num+"%");
};

Download.Video = function(){

    var serv = Url.server+"/uploads/film1/";
    var local = Url.fs+"uploads/base/";

    Server.save(serv , local, Base.video, Base.video_size);
    Server.save(serv , local, Base.index, Base.index_size);
};