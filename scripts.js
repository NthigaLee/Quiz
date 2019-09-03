
$(document).ready(function(){
    var difficulty = ["easy","medium","hard"];
    
    difficulty.forEach(function(diff){
        
        $(".clickable"+diff).click(function(){
            $(".questions").hide();
            $(".questions#" + diff).fadeToggle(1000);
            
        }); 
    });

    $(".questions#hard").submit(function(){
     $(".questions").hide();
    var a=parseInt($("input:radio[name=answer1]:checked").val());
    var b=parseInt($("input:radio[name=answer2]:checked").val());
    var c=parseInt($("input:radio[name=answer3]:checked").val());
    var result=sum([a,b,c]);
    
    alert(result);
    $("#output").text(result);
   
});

});   
   