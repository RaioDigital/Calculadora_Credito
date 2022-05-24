//Calcular a formula - ((curtidas + comentarios) / seguidores) * 100
//console.log('Flavio Teste')
const valor_emprestimo = document.querySelector("#valor_emprestimo")  // C = CAPITAL
const qtd_parcelas = document.querySelector("#qtd_parcelas")          // T = TEMPO
const taxa_juros = document.querySelector("#taxa_juros")              // I = TAXA
const resultado = document.querySelector("#resultado")                // J => JUROS = C * I * T  --> Taxa de juros simples

function calcular(){
  //console.log(valor_emprestimo.value)
  resultado.value = ((parseInt(valor_emprestimo.value) * parseInt(qtd_parcelas.value) * parseInt(taxa_juros.value))) * 0,03
  //console.log(qtd_parcelas.value)
  document.getElementById("resultado").innerHTML = resultado.value
}

function limparCampos(){
    with (document) {
        getElementById("valor_emprestimo").value = "";
        getElementById("qtd_parcelas").value = "";
        getElementById("taxa_juros").value = "";        
        getElementById("resultado").innerHTML = "$";
        valor_emprestimo.focus();
    }
}
