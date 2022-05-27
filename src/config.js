let endereco = "0x7c5ee9376f663d84255424d9dea384ec9f5ef1d1";
let lojas = [
  "0x5F4bf4E35781775C1Bb798cE436EbfaFE6088f6F",
  "0xC17E134d9F3d5bA2306cdfABaafAeaf655BB5853",
  "0xFC5A3Bb04000aE57407b133d388AF650cF547F8B",
]

let itens = [
  {
    price:1,
    title:"headset gamer logitech"
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
