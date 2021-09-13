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
                    },
                    {
                        "name": "amountLockStake",
                        "type": "uint128"
                    },
                    {
                        "name": "periodLockStake",
                        "type": "uint32"
                    },
                    {
                        "name": "apyLockStake",
                        "type": "uint32"
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
                "name": "getDetails",
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
                    },
                    {
                        "name": "safeLockStake",
                        "type": "address"
                    },
                    {
                        "name": "amountLockStake",
                        "type": "uint128"
                    },
                    {
                        "name": "timeStartLockStake",
                        "type": "uint256"
                    },
                    {
                        "name": "periodLockStake",
                        "type": "uint32"
                    },
                    {
                        "name": "apyLockStake",
                        "type": "uint32"
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
            },
            {
                "name": "_amountLockStake",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_amountLockStake",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "_timeStartLockStake",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_timeStartLockStake",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "_periodLockStake",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_periodLockStake",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "_apyLockStake",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_apyLockStake",
                        "type": "uint32"
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
            },
            {
                "name": "_amountLockStake",
                "type": "uint128"
            },
            {
                "name": "_timeStartLockStake",
                "type": "uint256"
            },
            {
                "name": "_periodLockStake",
                "type": "uint32"
            },
            {
                "name": "_apyLockStake",
                "type": "uint32"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "584546b2bdda43bf258485ba7529990e716a5e8dba12634b240e8ff566fadd72",
};
module.exports = { DataContract };