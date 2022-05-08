import "hardhat/console.sol";
contract Marketplace{
    address public marketplaceAddres = 0x01a4dF6d79bb3802C1A6F267261b536E6Dc9E792;

    function pagar(address loja)public payable{
        payable(loja).transfer(msg.value);
    }

}