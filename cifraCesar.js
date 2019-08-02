console.log(cesar('c', "mensagem codificada", 15));

//btchpvtb rdsxuxrpsp
//mensagem codificada
//15

function iniciar(){
  var dados = pegarDados();
  var resposta = cesar(dados[0], dados[1], dados[2]);
  escrever(resposta);
}

function escrever(resposta){
  var campo = document.getElementById("resposta");
  campo.innerHTML = "Saída:  " + resposta ;
}

function pegarDados(){
  var dados = {};

  var opcao = document.getElementById("opcao");
  var operacao = opcao.options[opcao.selectedIndex].value;
  dados[0] = operacao;

  var mensagem = document.getElementById("mensagem").value;
  dados[1] = mensagem;

  var casas = document.getElementById("casas").value;
  console.log(casas);
  dados[2] = casas;

  return dados;
}

function cesar(opcao, mensagem, casas){
  if(opcao == 'd'){
    return decifrar(mensagem, casas)
  }else{
    return cifrar(mensagem, casas)
  }
}

function decifrar(mensagem, casas){
  var resposta = "";
  const sumario = construirSumario('d', casas)

  for(let i=0; i < mensagem.length; i++ ){
    if(sumario[mensagem[i]] == undefined){
      resposta += mensagem[i]
    }else{
      resposta += sumario[mensagem[i]]
    }
  }

  return resposta
}

function cifrar(mensagem, casas){
  var resposta = "";
  const sumario = construirSumario('c', casas)

  for(let i=0; i < mensagem.length; i++ ){
    if(sumario[mensagem[i]] == undefined){
      resposta += mensagem[i]
    }else{
      resposta += sumario[mensagem[i]]
    }
  }

  return resposta

}

function construirSumario(opcao, casas){
  if (casas>26){
    casas = casas % 26;
  }

  const alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
  var sumario = {
    a: '', b: '', c: '',
    d: '', e: '', f: '',
    g: '', h: '', i: '',
    j: '', k: '', l: '',
    m: '', n: '', o: '',
    p: '', q: '', r: '',
    s: '', t: '', u: '',
    v: '', w: '', x: '',
    y: '', z: ''
  }

  if(opcao == 'c'){
    for(let i=0;i<(alfabeto.length)/2;i++){
      sumario[alfabeto[i]] = alfabeto[i+casas]
    }
  }else{
    for(let i=26;i<alfabeto.length;i++){
      sumario[alfabeto[i]] = alfabeto[i-casas]
    }
  }
  return sumario

}