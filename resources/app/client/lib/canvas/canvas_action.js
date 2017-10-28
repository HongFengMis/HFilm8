//画加载
action.drawProgress = function(i){

    if(!canvas.dom["progress"]){
        canvas.dom["progress"] = new createjs.Text(i+"%");
        canvas.dom["progress"].font = "bold 36px Vivaldi";
        canvas.dom["progress"].color = "#3C18B7";
        canvas.dom["progress"].x = 320;
        canvas.dom["progress"].y = 650;
    }else{
        canvas.dom["progress"].text = i+"%";
    }

    //canvas.cc["loader"].removeChild(canvas.dom["progress"]);
    canvas.cc["loader"].addChild(canvas.dom["progress"]);
};


//画开始画面
action.page1 = function(){

    canvas.set("page1", {alpha:0});
    canvas.hide("loader", {alpha:0}, 500, function(){
        canvas.show("page1", {alpha:1}, 500, function(){

            act.swipeUp(canvas.dom["p1_up"] , function(){
                action.page2();
            });

        });
    });

};


//第二页面
action.page2 = function(){

    canvas.set("page2", {y:1140});
    canvas.hide("page1", {y:-1140}, 500);
    canvas.show("page2", {y:0}, 500, function(){
        act.shake(function(){
        //canvas.dom["p2_up"].on("click", function(){
            action.page3();
        });
    });

};

//第三页
action.page3 = function(){

    act.clsShake();

    canvas.set("page3", {alpha:0});
    canvas.show("page3", {alpha:1}, 500, function(){
        act.shake(function(){
        //act.swipeUp(canvas.dom["p3_up"], function(){
            action.character1();
        });
    });

    setTimeout(function(){
        $("body").css("background-color", "#444");
        $("#Main").css("background-color", "#444");
    },200);

};

//角色1
action.character1 = function(){

    $("body").css("background-color", "#fff");
    $("#Main").css("background-color", "#fff");

    act.clsShake();

    canvas.set("character1", {alpha:0});
    canvas.hide("page2", {alpha:0}, 500);
    canvas.hide("page3", {alpha:0}, 500);

    canvas.show("character1", {alpha:1}, 500, function(){
        act.shake(function(){
        //act.swipeUp(canvas.dom["c1_up"], function(){
            action.character1_drink();
        });
    });


};

action.character1_drink = function(){
    act.clsShake();

    canvas.sprite["c1"].gotoAndPlay("drink");
    setTimeout(function(){
        canvas.sprite["next_c1"].gotoAndPlay("next");
        canvas.dom["c1_click"].on("click", function(){
            action.character2();
        });
    },2000);

};

//角色2
action.character2 = function(){

    act.clsShake();

    alert(1);


};

action.character2_drink = function(){
    act.clsShake();


};