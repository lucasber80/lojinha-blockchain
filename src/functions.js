
async function conectar() {
  let resultado = await ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log(resultado);
}

async function pagar() {
  const web3 = await new Web3(window.ethereum);
  let contrato = await new web3.eth.Contract(abi, endereco);
  let contas = await web3.eth.getAccounts();
  let conta = contas[0];
  let recipiet = await contrato.methods
    .pagar(loja)
    .send({ from: conta, value: 1000000000000000000 });
  console.log(recipiet);
}

async function returnItens(){
  const web3 = await new Web3(window.ethereum);
  let contrato = await new web3.eth.Contract(abi, endereco);
  let itens = await contrato.methods.getItens().call();
  console.log(itens)
}

async function comprar(){
  const web3 = await new Web3(window.ethereum);
  let contrato = await new web3.eth.Contract(abi, endereco);
  let contas = await web3.eth.getAccounts();
  let conta = contas[0];
  let recipiet = await contrato.methods
    .comprar(1)
    .send({ from: conta });;
  console.log(recipiet)
  
}
