
var distancia = 300;


function pular(){
$('#botao-pular').click(function(){
    
  //alterar o CSS pelo Jquery
    
    $('#sapo').css({'margin-bottom': '500px' , 
	'margin-left': distancia,           
	'border':'2px solid red'})
    distancia = distancia + 50;
});
}
setTimeout(pular, 300);





