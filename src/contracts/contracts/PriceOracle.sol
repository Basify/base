// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract PriceOracle is Initializable, OwnableUpgradeable, UUPSUpgradeable {
    function initialize() public initializer {
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function latestAnswer() external pure returns (uint256) {
        return 250 * 10 ** 18;
    }

    function decimals() external pure returns (uint8) {
        return 18;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}
