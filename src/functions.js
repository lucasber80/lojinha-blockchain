
async function conectar() {
  let resultado = await ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log(resultado);
}

async function pagar(value,loja) {
  var converted = value * 1000000000000000000
  const web3 = await new Web3(window.ethereum);
  let contrato = await new web3.eth.Contract(abi, endereco);
  let contas = await web3.eth.getAccounts();
  let conta = contas[0];
  let recipiet = await contrato.methods
    .pagar(loja)
    .send({ from: conta, value: converted});
  console.log(recipiet['from'])
  
}

async function conectar() {
  let resultado = await ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log(resultado);
}





