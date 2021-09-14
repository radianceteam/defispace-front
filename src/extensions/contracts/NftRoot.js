const NftRootContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
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
                        "name": "_amountLockStake",
                        "type": "uint128"
                    },
                    {
                        "name": "_periodLockStake",
                        "type": "uint32"
                    },
                    {
                        "name": "_apyLockStake",
                        "type": "uint32"
                    }
                ],
                "outputs": [
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
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_codeData",
                "type": "cell"
            },
            {
                "name": "_codeIndex",
                "type": "cell"
            },
            {
                "name": "_totalMinted",
                "type": "uint256"
            },
            {
                "name": "_addrBasis",
                "type": "address"
            },
            {
                "name": "_codeLockStakeSafe",
                "type": "cell"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "0d0b8b7b72d5267ce40ed83bc97136287af31c6622eedfd200b6b73569f026bd",
};
module.exports = { NftRootContract };