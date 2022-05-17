
contract Marketplace{
    string public nome = "vazio";

    function mudaNome(string memory _novoNome)public{
        nome = _novoNome;
    }

    function pagar(address loja)public payable{
        payable(loja).transfer(msg.value);
    }

}