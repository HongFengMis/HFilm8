//启动函数
function init(){
    canvas.loads(
        [
            {src:"bg.jpg" , id:"bg"},
            {src:"loader/cup.jpg" , id:"cup"}
        ]
        ,{
            Complete: function(){
                canvas.run(25);
                canvas.view_ini("loader");

                canvas.set("loader", {alpha:0});
                canvas.show("loader", {alpha:1}, 500);

                init_load();
            }
        }
    );
}

function init_load(){
    canvas.loads(
        [
            {src:"bg.jpg" , id:"bg"},
            {src:"bg_line.jpg" , id:"bg_line"},

            {src:"page1/page1.jpg" , id:"page1"},
            {src:"page1/p1_pot.jpg" , id:"p1_pot"},

            {src:"page2/page2.jpg" , id:"page2"},

            {src:"page3/page3.png" , id:"page3"},
            {src:"page3/jump.png" , id:"p3_jump"},

            {src:"character/tip.jpg" , id:"tip"},
            {src:"character/next.jpg" , id:"next"},

            {src:"character/c1_0.jpg" , id:"c1_0"},
            {src:"character/c1_1.jpg" , id:"c1_1"},
            {src:"character/c1_nm.jpg" , id:"c1_nm"},

            {src:"sprite/1.png" , id:"test1"},
            {src:"sprite/2.png" , id:"test2"},
            {src:"sprite/3.png" , id:"test3"},
            {src:"sprite/4.png" , id:"test4"},
            {src:"sprite/5.png" , id:"test5"},
            {src:"sprite/6.png" , id:"test6"},
            {src:"sprite/7.png" , id:"test7"},
            {src:"sprite/8.png" , id:"test8"},
            {src:"sprite/9.png" , id:"test9"}
        ]
        ,{
            Progress: function(ev){
                var i = parseInt(ev.progress*100);
                if(i>98) i=98;
                action.drawProgress(i);
            },
            Complete: function(){
                canvas.view_ini();

                setTimeout(function(){
                    action.drawProgress(100);
                    action.page1();
                }, 1000);

            }
        }
    )
}
