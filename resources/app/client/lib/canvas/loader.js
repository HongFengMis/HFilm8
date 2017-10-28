//宽高比例，等待时间，运行的section
function Loader(w , h, run, waitTime , fn){
    var ww = $(window).width();
    var wh = $(window).height();
    var wr = ww/wh;
    var nr = w/h;
    var nw,nh;

    if(wr>nr){
        nh = wh;
        nw = nh*nr;
    }else{
        nw = ww;
        nh = nw/nr;
    }
    var ss = nw/w;
    var sw = (ww-nw)/2;
    var sh = (wh-nh)/2;

    var cc = $("#CC")[0];

    var translate = "scale("+ss+")";
    cc.style.transform = translate;
    cc.style.msTransform  = translate;
    cc.style.mozTransform = translate;
    cc.style.oTransform   = translate;
    cc.style.webkitTransform = translate;

    var origin = "top left";
    cc.style.transformOrigin    = origin;
    cc.style.msTransformOrigin  = origin;
    cc.style.mozTransformOrigin = origin;
    cc.style.oTransformOrigin   = origin;
    cc.style.webkitTransformOrigin = origin;

    $("#CC").css({"margin-top":sh+"px" , "margin-left":sw+"px"});
    $("#Loader .img").show();

    //调整后的长宽
    this.w = nw;
    this.h = nh;
    this.s = ss;

    //隐藏Loader
    function hideLoader(){
        var $loader = $("#Loader");
        var loader = $loader[0];
        var transition = "opacity .5s ease-out";
        loader.style.transition   = transition;
        loader.style.msTransform  = transition;
        loader.style.mozTransform = transition;
        loader.style.oTransform   = transition;
        loader.style.webkitTransition = transition;
        $loader.css("opacity","0");
        setTimeout(function(){
            $("#Loader").css("visibility", "hide");
            $("#"+run).css("visibility", "visible");

            if(fn) fn();
            else init();
        },600);
    }
    if(!waitTime) waitTime = 1;
    setTimeout(hideLoader,waitTime*1000);

}