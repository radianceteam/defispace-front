const DataContract = {
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
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "codeIndex",
                        "type": "cell"
                    },
                    {
                        "name": "safeLockStake",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "transferOwnership",
                "inputs": [
                    {
                        "name": "addrTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrData",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getOwner",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "withdrawDePoolPart",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "withdrawDePoolAll",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "withdrawLockStakeSafePart",
                "inputs": [
                    {
                        "name": "destination",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "withdrawLockStakeSafeAll",
                "inputs": [
                    {
                        "name": "destination",
                        "type": "address"
                    }
                ],
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
                "name": "_id",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "_safeLockStake",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_safeLockStake",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_id",
                "type": "uint256"
            }
        ],
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
                "name": "_codeIndex",
                "type": "cell"
            },
            {
                "name": "_addrRoot",
                "type": "address"
            },
            {
                "name": "_addrOwner",
                "type": "address"
            },
            {
                "name": "_addrAuthor",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_safeLockStake",
                "type": "address"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "989f4201865774b96687ae5c3f562f828be67bf77c1b6e77fbb5ed243fc0409e",
};
module.exports = { DataContract };