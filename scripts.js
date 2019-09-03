
$(document).ready(function(){
    var difficulty = ["easy","medium","hard"];
    
    difficulty.forEach(function(diff){
        
        $(".clickable"+diff).click(function(){
            $(".questions").hide();
            
            $(".questions#" + diff).fadeToggle(1000);
            
        }); 
    });

    var numbers = [1,2,3];

    numbers.forEach(function(num){
        $("#submit"+num).click(function(){
    
            var a=parseInt($("input:radio[name=answer1]:checked").val());
            var b=parseInt($("input:radio[name=answer2]:checked").val());
            var c=parseInt($("input:radio[name=answer3]:checked").val());
            var result= a+b+c;
        $(".well").hide();  
        $(".score").fadeToggle(1000);
        $("#output").text(result);
        
            
    });  

});
});   
   