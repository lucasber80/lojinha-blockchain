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
    .pagar("0xc22134Fa1240890c7140A66395f511Db440e56f9")
    .send({ from: conta, value: 1000000000000000000 });
  console.log(recipiet);
}
