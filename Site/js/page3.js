function tabelapronta(){
var name = sessionStorage.getItem("nomeUsuario");
var dadostabela = JSON.parse(sessionStorage.getItem("dadosdatabela"));
var tabela = document.getElementById("tabelinha");
  for (var i = 0;i < dadostabela.length;i++) {
  	var tamanho = tabela.rows.length;
 var row = tabela.insertRow(tamanho);
  	   var horario = row.insertCell(0);
    var alimento = row.insertCell(1);
     var porcao = row.insertCell(2);
    horario.innerHTML = dadostabela[i].horarios;
    alimento.innerHTML = dadostabela[i].alimento;
    porcao.innerHTML = dadostabela[i].porcao;
  }
 }