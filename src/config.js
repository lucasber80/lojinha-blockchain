let endereco = "0x270323a3adae6888e4e11ae26ab8b7f29714bc9f";
const loja = "0xc22134Fa1240890c7140A66395f511Db440e56f9";
let abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "loja",
        type: "address",
      },
    ],
    name: "pagar",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "comprar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getItens",
    outputs: [
      {
        internalType: "address[16]",
        name: "",
        type: "address[16]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
