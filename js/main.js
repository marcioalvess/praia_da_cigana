
function load(){
    alert("Pagina carregada!")
}

function abrir(elemento){
    document.getElementById("historico").innerHTML= "Histórico";
    document.getElementById("fotos").innerHTML= "Fotos";
    document.getElementById("cardapio").innerHTML= "Cardápio";
}


function abrir2(elemento){
    document.getElementById("feijoada").innerHTML= "Feijoada";
    document.getElementById("festival-sorvete").innerHTML= "Festiva de Sorvete";
    document.getElementById("corrida-canoa").innerHTML= "Corrida de Canoa";
}

function abrir3(elemento){
    document.getElementById("peixe").innerHTML= "Peixe Frito";
    document.getElementById("suco").innerHTML= "";
    document.getElementById("carne").innerHTML= "Corrida de Canoa";
    
    function menu_suco(elemento){
    console.log(elemento.value)//value puxa um valor
    }
}

function abrir4(elemento){
    window.open("https://www.google.com.br/maps/place/Praia+da+Cigana/@-6.6051451,-47.4566174,17z/data=!3m1!4b1!4m5!3m4!1s0x92da09fb850e84d3:0x25e7f0528bd0d746!8m2!3d-6.6051504!4d-47.4544287");
}



function redir_historico(elemento){
    window.open("http://127.0.0.1:5501/historico.html");
}
function redir_fotos(elemento){
    window.open("https://www.google.com/url?sa=i&url=https%3A%2F%2Fglamurama.uol.com.br%2Fcom-fronteiras-fechadas-por-causa-da-pandemia-ilhas-maldivas-deverao-reabrir-para-turistas-em-julho%2F&psig=AOvVaw2DEGIW-iJ3CImpu3oHumtz&ust=1608598346215000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIifoPzt3e0CFQAAAAAdAAAAABAD");
}
function redir_cardapio(elemento){
    window.open("https://digitalinnovation.one/");
}


/* function trocar(){
    //document.getElementById("mousemove").innerHTML = "Obrigado por pasar o mouse";
    elemento.innerHTML = "Historico";
} */