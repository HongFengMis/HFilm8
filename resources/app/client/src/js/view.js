Views.Index = function(){
    var url = "../../uploads/base/";
    Base = {};
    Base.index = "v.png";
    Base.video = "v.mp4";
    $("#Nav img").attr("src" , url+Base.index);
    $("#Video video").attr("src" , url+Base.video);
};