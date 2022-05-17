
async function conectar() {
  let resultado = await ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log(resultado);
}

async function pagar(value) {
  const web3 = await new Web3(window.ethereum);
  let contrato = await new web3.eth.Contract(abi, endereco);
  let contas = await web3.eth.getAccounts();
  let conta = contas[0];
  let recipiet = await contrato.methods
    .pagar(loja)
    .send({ from: conta, value: value});
}

async function nome() {
  const web3 = await new Web3(window.ethereum);
  let contrato = await new web3.eth.Contract(abi, endereco);
  let nome = await contrato.methods.nome().call()
  console.log(nome)
}


