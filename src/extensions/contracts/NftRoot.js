const NftRootContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "codeIndex",
                        "type": "cell"
                    },
                    {
                        "name": "codeData",
                        "type": "cell"
                    },
                    {
                        "name": "codeLockStakeSafe",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createLockStakeSafeWithNftKey",
                "inputs": [
                    {
                        "name": "_donor",
                        "type": "address"
                    },
                    {
                        "name": "_depoolAddress",
                        "type": "address"
                    },
                    {
                        "name": "_depoolFee",
                        "type": "uint128"
                    },
                    {
                        "name": "_depoolMinStake",
                        "type": "uint128"
                    },
                    {
                        "name": "_periodLockStake",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "createStatus",
                        "type": "bool"
                    },
                    {
                        "name": "createAmount",
                        "type": "uint128"
                    },
                    {
                        "name": "addressNftKey",
                        "type": "address"
                    },
                    {
                        "name": "addressLockStakeSafe",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "deployBasis",
                "inputs": [
                    {
                        "name": "codeIndexBasis",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "destructBasis",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "resolveCodeHashIndex",
                "inputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "codeHashIndex",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveIndex",
                "inputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "addrData",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrIndex",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "resolveCodeHashData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeHashData",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveData",
                "inputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrData",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "513abbc42db3352fd119d1105e0c717841ba11774b99c6fc16f63ef0842a3efa",
};
module.exports = { NftRootContract };