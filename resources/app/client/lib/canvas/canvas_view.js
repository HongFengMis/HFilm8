view.loader = function(){
    canvas.ccv("loader");
    canvas.drawImg("bg", "loader");
    canvas.drawImg("cup", "loader", {x:297 , y:445});
};

view.page1 = function(){
    canvas.ccv("page1");

    canvas.drawImg("bg1", "", "", canvas.loaded["bg"]);
    canvas.drawSprite("page1", "", {
        json:[476, 773, 105, 132],
        mov:{"ini":[0,3]}
    });
    canvas.drawImg("p1_pot", "" , {x:223, y:912});
    canvas.drawArea("p1_up", "", [0,0, 700, 1140], "#ffffff", {alpha:0.01});

    canvas.draw("page1" , [
        canvas.img["bg1"],
        canvas.sprite["page1"] ,
        canvas.img["p1_pot"],
        canvas.dom["p1_up"]
    ]);

};

view.page2 = function(){
    canvas.ccv("page2");

    canvas.drawImg("bg2", "", "", canvas.loaded["bg"]);
    canvas.drawSprite("page2", "", {
        json:[503, 840, 95, 179],
        mov:{"ini":[0,3]}
    });
    canvas.drawArea("p2_up", "", [0,0, 700, 1140], "#ffffff", {alpha:0.01});

    canvas.draw("page2" , [
        canvas.img["bg2"],
        canvas.sprite["page2"] ,
        canvas.dom["p2_up"]
    ]);

};

view.page3 = function(){
    canvas.ccv("page3");

    canvas.drawSprite("page3", "", {
        json:[700, 1140, 0, 0],
        mov:{"ini":[0,3]}
    });
    canvas.drawSprite("p3_jump", "", {
        json:[243, 568, 263, 229],
        mov:{"ini":[0,5]}
    });
    canvas.drawArea("p3_up", "", [0,0, 700, 1140], "#ffffff", {alpha:0.01});


    canvas.draw("page3" , [
        canvas.sprite["page3"] ,
        canvas.sprite["p3_jump"],
        canvas.dom["p3_up"]
    ]);

};

view.character1 = function(){
    canvas.ccv("character1");

    canvas.drawImg("bg_c1", "", "", canvas.loaded["bg"]);
    canvas.drawImg("bg_c1_line", "", {x:650}, canvas.loaded["bg_line"]);

    canvas.drawSprite("tip_c1", "", {
        json:[394, 206, 246, 866],
        mov:{"ini":[0,3]}
    }, [canvas.loaded["tip"]]);

    canvas.drawSprite("next_c1", "", {
        json:[183, 205, 56, 866],
        mov:{
            "ini":[0,3],
            "next":[4,7]
        }
    }, [canvas.loaded["next"]]);

    canvas.drawSprite("c1", "", {
        json:[632, 620, 52, 227],
        mov:{
            "ini":[0,19],
            "drink":[20,39,"cry"],
            "cry":[40,59]
        }
    },[
        canvas.loaded["c1_0"],
        canvas.loaded["c1_1"]
    ]);


    canvas.drawSprite("c1_nm", "", {
        json:[581, 164, 59, 59],
        mov:{"ini":[0,3]}
    });
    canvas.drawArea("c1_up", "", [0,0, 700, 1140], "#ffffff", {alpha:0.01});
    canvas.drawArea("c1_click", "", [56, 866, 183, 205], "#ffffff", {alpha:0.01});

    canvas.draw("character1" , [
        canvas.img["bg_c1"] ,
        canvas.sprite["tip_c1"],
        canvas.sprite["next_c1"],
        canvas.sprite["c1"],
        canvas.sprite["c1_nm"],
        canvas.img["bg_c1_line"],
        canvas.dom["c1_up"],
        canvas.dom["c1_click"]
    ]);

};