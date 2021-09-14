
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
    codeHash: "250573a74b3dd3197f7d749c9a5eef5f8eda362e65473976fad7570b800e77e8",
};
module.exports = { LockStakeSafeContract };
