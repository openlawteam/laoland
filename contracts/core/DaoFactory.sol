pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

// SPDX-License-Identifier: MIT

import "./DaoConstants.sol";
import "./DaoRegistry.sol";
import "./CloneFactory.sol";
import "../adapters/Onboarding.sol";

/**
MIT License

Copyright (c) 2020 Openlaw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

contract DaoFactory is CloneFactory, DaoConstants {
    struct Adapter {
        bytes32 id;
        address addr;
        uint256 flags;
    }

    event DAOCreated(address _address);
    event Debug(string msg);

     //TODO: ACL? onlyOwner?
    function newDao(address _libraryAddress) external {
        DaoRegistry dao = DaoRegistry(_createClone(_libraryAddress));
        dao.initialize(msg.sender);
        emit DAOCreated(address(dao));
    }

    /*
     * @dev: A new DAO is instantiated with only the Core Modules enabled, to reduce the call cost.
     *       Another call must be made to enable the default Adapters, see @registerDefaultAdapters.
     */
    //TODO: ACL? onlyOwner?
    function addAdapters(DaoRegistry dao, Adapter[] calldata adapters)
        external
    {
        //Registring Adapters
        require(
            dao.state() == DaoRegistry.DaoState.CREATION,
            "this DAO has already been setup"
        );

        for (uint256 i = 0; i < adapters.length; i++) {
            dao.addAdapter(adapters[i].id, adapters[i].addr, adapters[i].flags);
        }
    }

     //TODO: ACL? onlyOwner?
    function updateAdapter(DaoRegistry dao, Adapter calldata adapter) external {
        require(
            dao.state() == DaoRegistry.DaoState.CREATION,
            "this DAO has already been setup"
        );

        dao.removeAdapter(adapter.id);
        dao.addAdapter(adapter.id, adapter.addr, adapter.flags);
    }

}
