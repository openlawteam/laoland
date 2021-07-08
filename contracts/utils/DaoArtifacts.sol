pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

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

contract DaoArtifacts {
    enum ArtifactType {CORE, FACTORY, EXTENSION, ADAPTER, UTIL}

    // Mapping from Artifact Name => (Owner Address => (Type => (Version => Adapters Address)))
    mapping(bytes32 => mapping(address => mapping(ArtifactType => mapping(bytes32 => address))))
        public artifacts;

    event NewArtifact(
        bytes32 _id,
        address _owner,
        bytes32 _version,
        address _address,
        ArtifactType _type
    );

    /**
     * @notice Adds the adapter address to the storage
     * @param _id The id of the adapter (sha3).
     * @param _version The version of the adapter.
     * @param _address The address of the adapter to be stored.
     * @param _type The artifact type: 0 = Core, 1 = Factory, 2 = Extension, 3 = Adapter, 4 = Util.
     */
    function addArtifact(
        bytes32 _id,
        bytes32 _version,
        address _address,
        ArtifactType _type
    ) external {
        address _owner = msg.sender;
        artifacts[_id][_owner][_type][_version] = _address;
        emit NewArtifact(_id, _owner, _version, _address, _type);
    }

    /**
     * @notice Retrieves the adapter/extension factory address from the storage.
     * @param _id The id of the adapter/extension factory (sha3).
     * @param _owner The address of the owner of the adapter/extension factory.
     * @param _version The version of the adapter/extension factory.
     * @param _type The type of the artifact: 0 = Core, 1 = Factory, 2 = Extension, 3 = Adapter, 4 = Util.
     * @return The address of the adapter/extension factory if any.
     */
    function getArtifactAddress(
        bytes32 _id,
        address _owner,
        bytes32 _version,
        ArtifactType _type
    ) external view returns (address) {
        return artifacts[_id][_owner][_type][_version];
    }
}
