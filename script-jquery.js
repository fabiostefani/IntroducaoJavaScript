$(function(){
    trocarCorComEfeito();
    trocarCorP("#vermelho", "red");    
    //trocarCorP("#azul", "blue");    
});

function trocarCorP(id, color, efeito){
    $(id).click(function(){
        $('p').css("color", color);        
        $('#mensagem').text("Cor alterada com sucesso")
                      .css( {color: color, border: `1px solid ${color}`, backgroundColor: '#F08080'})  ;        
    })
}

// function trocarCorP(id, color, efeito){
//     $(id).click(function(){
//         $('p').css("color", color);        
//         $('#mensagem').text("Cor alterada com sucesso")
//                       .css("color", color)  
//                       .css("border", `1px solid ${color}`);        
//     })
// }

function trocarCorComEfeito(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').fadeOut();        
        $('p').delay(1000);      
        $('p').fadeIn();          
    })
}