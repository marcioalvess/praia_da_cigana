
function load(){
    alert("Pagina carregada!")
}

$(document).ready(function() {
    var botao = $('.bt1');
    var dropDown = $('.ul-entret');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
    });
});

$(document).ready(function() {
    var botao = $('.bt2');
    var dropDown = $('.ul-cardapio');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
    });
});

$(document).ready(function() {
    var botao = $('.bt3');
    var dropDown = $('.ul-sobre');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
    });
});


function redir_historico(elemento){
    window.open("/historico.html");//pra abrir a pagina interna basta colocar a barra e o nome da pasta
}

function redir_acesso(elemento){
    window.open("/form.html");
}

function redir_localiza(elemento){
    window.open ("/https://www.google.com/maps/place/Praia+da+Cigana/@-6.6051504,-47.4566174,17z/data=!3m1!4b1!4m5!3m4!1s0x92da09fb850e84d3:0x25e7f0528bd0d746!8m2!3d-6.6051504!4d-47.4544287");
}   
/* function redir_fotos(elemento){
    window.open("/album.html");
}
function redir_cardapio(elemento){
    window.open("https://digitalinnovation.one/");
}
 */

/* function trocar(){
    //document.getElementById("mousemove").innerHTML = "Obrigado por pasar o mouse";
    elemento.innerHTML = "Historico";
} */