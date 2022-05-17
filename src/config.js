let endereco = "0x2d1606f49e01d58bdc9877a6f3e97cd37ec7d9e8";
const loja =   "0x5635fD9053C5B28b81d573364ec7fB49F85eb1fB";
let abi = [
  {
    "inputs": [],
    "name": "nome",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_novoNome",
        "type": "string"
      }
    ],
    "name": "mudaNome",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "loja",
        "type": "address"
      }
    ],
    "name": "pagar",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]
