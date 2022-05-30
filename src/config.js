let endereco = "0x19768afe4981b162d7a851418a16eb00f85c0581";
let lojas = [
  "0xD0553fdeA1ABE8b59175d77112c40b3E19054137",
  "0xb5546122495A64843D3ae27752c567D32f719CD0",
  "0x78F281f168584C8cf416d4da0b197711BCd34CEA",
]

let itens = [
  {
    price:1,
    title:"headset gamer logitech"
  },
  {
    price:2,
    title:"Processador intal"
  }
]

let abi = [
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
      "type": "function",
      "payable": true
    }
  ]
