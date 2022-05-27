pragma solidity ^0.8.13;
pragma experimental ABIEncoderV2;
contract Marketplace {
    function pagar(address loja) public payable {
        payable(loja).transfer(msg.value);
    }

}
