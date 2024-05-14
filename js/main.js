var url="";
var mframe  =  document.getElementById("mFrame");
const btnMetas  =  document.querySelector("#btnmetas");
const btnCorrespondencia = document.querySelector("#btncorrespondencia");
const btnEstadisticas = document.querySelector("#btnEstadisticas");
const btnWeb = document.querySelector("#btnWeb");
const btnConsulta = document.querySelector("#btnConsulta");
const btnIndicadores = document.querySelector("#btnIndicadores");
const btnwsMetas = document.querySelector("#btnwsMetas");
const btnwsMetasRest = document.querySelector("#btnwsMetasRest");
const btnSRVCorrespondencia = document.querySelector("#btnSRVCorrespondencia");

btnMetas.addEventListener("click", function(){
    mframe.setAttribute("src", "https://sigobn.isbm.gob.sv/Metas/seguridad/Login.aspx");          

});

btnCorrespondencia.addEventListener("click", function(){
    mframe.setAttribute("src", "https://sigobn.isbm.gob.sv/Correspondencia/");          

});

btnSRVCorrespondencia.addEventListener("click", function(){
    mframe.setAttribute("src", "https://sigobn.isbm.gob.sv/Correspondencia/");          

});


btnEstadisticas.addEventListener("click", function(){
    mframe.setAttribute("src", "https://sigobn.isbm.gob.sv/EstadisticasCorrespondencia/");          

});

btnWeb.addEventListener("click", function(){
    mframe.setAttribute("src", "https://sigobn.isbm.gob.sv/RegistroWeb/");          

});

btnConsulta.addEventListener("click", function(){
    mframe.setAttribute("src", "https://sigobn.isbm.gob.sv/ConsultaCorrespondencia/default.aspx");          

});

btnIndicadores.addEventListener("click", function(){
    mframe.setAttribute("src", "https://sigobn.isbm.gob.sv/AdminIndicadores");          

});

btnwsMetas.addEventListener("click", function(){
    mframe.setAttribute("src", "https://sigobn.isbm.gob.sv/wsMetas/wsMetas.asmx");          
});

btnwsMetasRest.addEventListener("click", function(){
    mframe.setAttribute("src", "https://sigobn.isbm.gob.sv/wsMetasRest");          
});


//https://sigobn.isbm.gob.sv/Correspondencia/
//https://sigobn.isbm.gob.sv/ConsultaCorrespondencia/default.aspx 
//https://sigobn.isbm.gob.sv/AdminIndicadores 