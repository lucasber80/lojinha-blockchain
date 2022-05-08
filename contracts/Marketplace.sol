pragma solidity ^0.8.7;

contract Marketplace{
        string public nome = "ana";

    function mudarNome(string memory _nome)public{
        nome = _nome;
    }

    function pagar(address loja)public payable{
        payable(loja).transfer(msg.value);
    }

}