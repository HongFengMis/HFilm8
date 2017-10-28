//////////////////////////////// 视频控制函数 ////////////////////////////////
var MediaNow = "";
function Media(id, pa){
    this.m = $(id);

    if(pa){
        //可选 room(和房间bind，对应room的关键字)
        //可选 group（组，同组的同时只有一个视频可以播放）
        //可选 id(同组的多个Media对应的id)
        if(!pa.nm) pa.nm = IO.Name;
        if(!pa.to) pa.to = "guide";
        if(!pa.id) pa.id = "";
        this.vid = pa.id;
        if(pa.group) this.group = true;
        if(pa.loop) {
            this.loop = true;
            this.m[0].loop = true;
        }
        this.room = pa.room;
        this.nm = pa.nm;

        socket.on("MediaStop"+pa.id, function(json){
            this.stop();
            if(pa.room) {
                if(Action[pa.room+"Stop"]) Action[pa.room+"Stop"](pa.id , this, json);
            }
        }.bind(this));

        socket.on("MediaPlay"+pa.id, function(json){

            if(json.vol) this.volume(json.vol);

            if(this.group && MediaNow && MediaNow.vid!=this.vid) {
                MediaNow.stop(0);
            }
            MediaNow = this;
            this.play();

            if(pa.room) {
                Action[pa.room](pa.id , this ,  json);
                if(Action[pa.room+"Play"]) Action[pa.room+"Play"](pa.id , this ,  json);
            }
        }.bind(this));

        socket.on("MediaPlayLoop"+pa.id, function(json){

            if(json.vol) this.volume(json.vol);

            if(this.group && MediaNow && MediaNow.vid!=this.vid) {
                MediaNow.stop(0);
            }
            MediaNow = this;
            this.play(0,1);

            if(pa.room) {
                Action[pa.room](pa.id , this ,  json);
                if(Action[pa.room+"Play"]) Action[pa.room+"Play"](pa.id , this ,  json);
            }
        }.bind(this));

        socket.on("MediaEnd"+pa.id, function(json){
            this.gotoEnd(json);
        }.bind(this));

        socket.on("MediaVol"+pa.id, function(json){
            if(json) this.volume(json.num);
        }.bind(this));

        socket.on("MediaTime"+pa.id, function(json){
            if(json) this.time(json.num);
        }.bind(this));

        socket.on("MediaLength"+pa.id, function(json){
            IO.emit({to:pa.to , key:pa.nm+"Length"+pa.id, num:this.len()});
        }.bind(this));
    }
}
Media.prototype.play = function(i, loop){
    if(!this.m.length) return;
    if(i || i===0) this.m[0].currentTime=i;
    if(loop) this.m[0].loop = true;
    //Log("【Media.play】开始播放：（从第"+this.m[0].currentTime+"开始）");
    this.m[0].play();
};
Media.prototype.playAndFn = function(i, fn, unbind){
    if(!this.m.length) return;
    //Log("【Media.stop】：设定视频播放到"+i+"秒后停止播放");
    this.m.bind('timeupdate', function(){
        if(this.m[0].currentTime>=i) {
            //Log("@【Action.stop】=>已播放"+i+"秒：停顿");
            if(unbind) this.m.unbind('timeupdate');
            if(fn) fn(this);
        }
    }.bind(this));
};
Media.prototype.stop = function(i){
    if(!this.m.length) return;
    //Log("【Media.pause】：停止播放");
    if(i || i===0) this.m[0].currentTime=i;
    this.m[0].pause();
};
Media.prototype.stopAndFn = function(i, fn, unbind){
    if(!this.m.length) return;
    //Log("【Media.stop】：设定视频播放到"+i+"秒后停止播放");
    this.m.bind('timeupdate', function(){
        if(this.m[0].currentTime>=i) {
            //Log("@【Action.stop】=>已播放"+i+"秒：停顿");
            if(unbind) this.m.unbind('timeupdate');
            this.pause();
            if(fn) fn();
        }
    }.bind(this));
};

Media.prototype.end = function(fn, unbind){
    if(!this.m.length) return;
    //Log("【Media.end】：视频结束后运行");
    this.m.bind('ended', function(){
        //Log("@【Media.end】：视频结束ended");
        if(unbind) this.m.unbind('ended');
        fn(this);
    }.bind(this));
};

Media.prototype.unbind = function(id){
    if(!this.m.length) return;
    //Log("【Media.unbind】：清除所有绑定");
    if(id) this.m.unbind(id);
    else{
        this.m.unbind('ended');
        this.m.unbind('timeupdate');
    }

};

Media.prototype.para = function(pa){
    for(var p in pa){
        this.m[0][p] = pa[p];
    }
};

Media.prototype.volume = function(num){
    if(!this.m.length) return;
    if(num>1) num = parseInt(num)/100;
    if(!num) num = 0;
    //Log("【Media.unbind】：清除所有绑定");
    if(num || num===0)
        this.m[0].volume = num;
    else return this.m[0].volume;
};

Media.prototype.len = function(){
    if(!this.m.length) return;
    return this.m[0].duration;
};

Media.prototype.time = function(num){
    if(!this.m.length) return;
    //Log("【Media.unbind】：清除所有绑定");
    if(num || num===0) this.m[0].currentTime = num;
    else return this.m[0].currentTime;
};

Media.prototype.gotoEnd = function(json){
    if(!this.m.length) return;
    this.stop(0);
    IO.emit({to: "guide", key: this.nm + "End" + this.vid});
    if (this.room) {
        if (Action[this.room + "End"]) Action[this.room + "End"](this.vid, this, json);
    }
};