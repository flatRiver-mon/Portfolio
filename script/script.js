$(document).ready(function(){
    
    
    var z = 20;
    var transitionEnd = "transitionend";
    var btntabH = $("#btntab").height();
    
    function coverfit(){
        var bookW = $("#book").width();
        var bookH = $("#book").height();
        $("#bookcover").css({
            width: bookW + 12 + "px",
            height: bookH + 24 + "px"
        });
        $("#firstpage").css({
            width: bookW + 12 + "px",
            height: bookH + 24 + "px"
        });
    }
    
    coverfit();
    
    $(window).resize(function(){
        var winW = $(window).width();
        if(winW <= 790){
            $("#btntab").css({
                right: btntabH
            });
        }else {
            $("#btntab").css({
                right: 0
            });
        }
        coverfit();
    });
    
    $("#firstpage").click(function(){
        if(!$(this).hasClass("turn")){
            z = z+1;
            $("#firstpage").addClass("turn").css({
                transform: "rotateY(-180deg)",
                zIndex: z
            });
            $(this).next("#skill").show();
            fpage = true;
        }else{
            z = z+1;
            $("#firstpage").removeClass("turn").css({
                transform: "rotateY(0deg)",
                zIndex: z
            });
            fpage = false;
        }
    });
    
    $(".skillpage").click(function(){
        if(!$(this).hasClass("turn")){
            z = z+1;
            $(".skillpage").addClass("turn").css({
                transform: "rotateY(-180deg)",
                zIndex: z
            });
            $("#works").children(".page").eq(0).show();
            spage = true;
        }else{
            z = z+1;
            $(".skillpage").removeClass("turn").css({
                transform: "rotateY(0deg)",
                zIndex: z
            });
            spage = false;
        }
    });
    
    var pagelen = $(".page").length;
    
    var pagecur;
    
    $(".page").click(function(){
        if(!$(this).hasClass("turn")){
            z = z+1;
            var th = $(this).index();
            if(th == pagelen-1){
                $(".page").eq(th).addClass("turn").css({
                    transform: "rotateY(-180deg)",
                    zIndex: z
                });
                $("#aboutme").show();
                pagecur = th;
                wpage = true;
            }else{
                $(".page").eq(th).addClass("turn").css({
                    transform: "rotateY(-180deg)",
                    zIndex: z
                });
                $(".page").eq(th+1).show();
                pagecur = th;
                wpage = true;
            }
        }else{
            z = z+1;
            var th = $(this).index();
            if(th == 0){
                $(".page").eq(th).removeClass("turn").css({
                    transform: "rotateY(0deg)",
                    zIndex: z
                });
                pagecur = th;
                wpage = false;
            }else{
                $(".page").eq(th).removeClass("turn").css({
                    transform: "rotateY(0deg)",
                    zIndex: z
                });
                pagecur = th;
                wpage = false;
            }
        }
    });
    

    
    var fpage = false;
    var spage = false;
    var wpage = false;
    var apage = false;
    
    $("#skillmark").click(function(){
        if(fpage == false){
            z = z+1;
            $("#firstpage").addClass("turn").css({
                transform: "rotateY(-180deg)",
                zIndex: z
            });
            $("#skill").children(".skillpage").show();
            fpage = true;
        }else if(wpage == true){
            $(".page").removeClass("turn").css({
                transform: "rotateY(0deg)",
                transition: 1+"s"
            });
            wpage = false;
            $(".page").one(transitionEnd,function(){
                $(".page").css("transition",1.5+"s");
                z++;
                $(".skillpage").removeClass("turn").css({
                    transform: "rotateY(0deg)",
                    zIndex: z
                });
                spage = false;
                
            });
        }else if(spage == true){
            z = z+1;
            $(".skillpage").removeClass("turn").css({
                transform: "rotateY(0deg)",
                zIndex: z
            });
            spage = false;
        }
    });
    
    $("#workmark").click(function(){
        
    });
    
    var pagenum = 0;
    
    $("#aboutmark").click(function(){
        
    });
    
    $(".tolink").click(function(e){
        e.stopPropagation();
    });

    
});