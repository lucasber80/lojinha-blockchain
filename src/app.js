async function conectar() {
  let resultado = await ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log(resultado);
}


