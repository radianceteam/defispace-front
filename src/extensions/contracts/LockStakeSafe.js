const LockStakeSafeContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "amountLockStake",
                        "type": "uint128"
                    },
                    {
                        "name": "periodLockStake",
                        "type": "uint32"
                    }
                ],
                "outputs": []
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
                "name": "onRoundComplete",
                "inputs": [
                    {
                        "name": "roundId",
                        "type": "uint64"
                    },
                    {
                        "name": "reward",
                        "type": "uint64"
                    },
                    {
                        "name": "ordinaryStake",
                        "type": "uint64"
                    },
                    {
                        "name": "vestingStake",
                        "type": "uint64"
                    },
                    {
                        "name": "lockStake",
                        "type": "uint64"
                    },
                    {
                        "name": "reinvest",
                        "type": "bool"
                    },
                    {
                        "name": "reason",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveAnswer",
                "inputs": [
                    {
                        "name": "errcode",
                        "type": "uint32"
                    },
                    {
                        "name": "comment",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onTransfer",
                "inputs": [
                    {
                        "name": "source",
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
                "name": "depoolAddress",
                "inputs": [],
                "outputs": [
                    {
                        "name": "depoolAddress",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "nftKeyAddress",
                "inputs": [],
                "outputs": [
                    {
                        "name": "nftKeyAddress",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "depoolFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "depoolFee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "depoolMinStake",
                "inputs": [],
                "outputs": [
                    {
                        "name": "depoolMinStake",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "salt",
                "inputs": [],
                "outputs": [
                    {
                        "name": "salt",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "stakeList",
                "inputs": [],
                "outputs": [
                    {
                        "name": "stakeList",
                        "type": "map(uint256,uint128)"
                    }
                ]
            },
            {
                "name": "stakeTotal",
                "inputs": [],
                "outputs": [
                    {
                        "name": "stakeTotal",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "depoolStakeReturn",
                "inputs": [],
                "outputs": [
                    {
                        "name": "depoolStakeReturn",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "withdrawTotal",
                "inputs": [],
                "outputs": [
                    {
                        "name": "withdrawTotal",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "onRoundCompleteList",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "msgValue",
                                "type": "uint128"
                            },
                            {
                                "name": "roundId",
                                "type": "uint64"
                            },
                            {
                                "name": "reward",
                                "type": "uint64"
                            },
                            {
                                "name": "ordinaryStake",
                                "type": "uint64"
                            },
                            {
                                "name": "vestingStake",
                                "type": "uint64"
                            },
                            {
                                "name": "lockStake",
                                "type": "uint64"
                            },
                            {
                                "name": "reinvest",
                                "type": "bool"
                            },
                            {
                                "name": "reason",
                                "type": "uint8"
                            }
                        ],
                        "name": "onRoundCompleteList",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "receiveAnswerList",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "errcode",
                                "type": "uint32"
                            },
                            {
                                "name": "comment",
                                "type": "uint64"
                            },
                            {
                                "name": "msgValue",
                                "type": "uint128"
                            }
                        ],
                        "name": "receiveAnswerList",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "onTransferList",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "source",
                                "type": "address"
                            },
                            {
                                "name": "amount",
                                "type": "uint128"
                            }
                        ],
                        "name": "onTransferList",
                        "type": "map(uint256,tuple)"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "depoolAddress",
                "type": "address"
            },
            {
                "key": 2,
                "name": "nftKeyAddress",
                "type": "address"
            },
            {
                "key": 3,
                "name": "depoolFee",
                "type": "uint128"
            },
            {
                "key": 4,
                "name": "depoolMinStake",
                "type": "uint128"
            },
            {
                "key": 5,
                "name": "salt",
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
                "name": "depoolAddress",
                "type": "address"
            },
            {
                "name": "nftKeyAddress",
                "type": "address"
            },
            {
                "name": "depoolFee",
                "type": "uint128"
            },
            {
                "name": "depoolMinStake",
                "type": "uint128"
            },
            {
                "name": "salt",
                "type": "uint256"
            },
            {
                "name": "stakeList",
                "type": "map(uint256,uint128)"
            },
            {
                "name": "stakeTotal",
                "type": "uint128"
            },
            {
                "name": "depoolStakeReturn",
                "type": "uint128"
            },
            {
                "name": "withdrawTotal",
                "type": "uint128"
            },
            {
                "components": [
                    {
                        "name": "msgValue",
                        "type": "uint128"
                    },
                    {
                        "name": "roundId",
                        "type": "uint64"
                    },
                    {
                        "name": "reward",
                        "type": "uint64"
                    },
                    {
                        "name": "ordinaryStake",
                        "type": "uint64"
                    },
                    {
                        "name": "vestingStake",
                        "type": "uint64"
                    },
                    {
                        "name": "lockStake",
                        "type": "uint64"
                    },
                    {
                        "name": "reinvest",
                        "type": "bool"
                    },
                    {
                        "name": "reason",
                        "type": "uint8"
                    }
                ],
                "name": "onRoundCompleteList",
                "type": "map(uint256,tuple)"
            },
            {
                "components": [
                    {
                        "name": "errcode",
                        "type": "uint32"
                    },
                    {
                        "name": "comment",
                        "type": "uint64"
                    },
                    {
                        "name": "msgValue",
                        "type": "uint128"
                    }
                ],
                "name": "receiveAnswerList",
                "type": "map(uint256,tuple)"
            },
            {
                "components": [
                    {
                        "name": "source",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    }
                ],
                "name": "onTransferList",
                "type": "map(uint256,tuple)"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "95f09f706c0a515b96f0f0bec7eb283a98d53ad06f6a9cace047e2e87b0ac8a5",
};
module.exports = { LockStakeSafeContract };