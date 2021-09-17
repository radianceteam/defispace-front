const RootTokenContract = {
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
                        "name": "root_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "root_owner_address_",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getVersion",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getDetails",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "name",
                                "type": "bytes"
                            },
                            {
                                "name": "symbol",
                                "type": "bytes"
                            },
                            {
                                "name": "decimals",
                                "type": "uint8"
                            },
                            {
                                "name": "root_public_key",
                                "type": "uint256"
                            },
                            {
                                "name": "root_owner_address",
                                "type": "address"
                            },
                            {
                                "name": "total_supply",
                                "type": "uint128"
                            }
                        ],
                        "name": "value0",
                        "type": "tuple"
                    }
                ]
            },
            {
                "name": "getTotalSupply",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getWalletCode",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "getWalletAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "sendExpectedWalletAddress",
                "inputs": [
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployWallet",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "deploy_grams",
                        "type": "uint128"
                    },
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    },
                    {
                        "name": "gas_back_address",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "deployEmptyWallet",
                "inputs": [
                    {
                        "name": "deploy_grams",
                        "type": "uint128"
                    },
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    },
                    {
                        "name": "gas_back_address",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "mint",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "proxyBurn",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "sender_address",
                        "type": "address"
                    },
                    {
                        "name": "send_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "callback_address",
                        "type": "address"
                    },
                    {
                        "name": "callback_payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "tokensBurned",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "sender_public_key",
                        "type": "uint256"
                    },
                    {
                        "name": "sender_address",
                        "type": "address"
                    },
                    {
                        "name": "send_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "callback_address",
                        "type": "address"
                    },
                    {
                        "name": "callback_payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendSurplusGas",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setPaused",
                "inputs": [
                    {
                        "name": "value",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendPausedCallbackTo",
                "inputs": [
                    {
                        "name": "callback_id",
                        "type": "uint64"
                    },
                    {
                        "name": "callback_addr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "transferOwner",
                "inputs": [
                    {
                        "name": "root_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "root_owner_address_",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "name",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "symbol",
                "inputs": [],
                "outputs": [
                    {
                        "name": "symbol",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "decimals",
                "inputs": [],
                "outputs": [
                    {
                        "name": "decimals",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "start_gas_balance",
                "inputs": [],
                "outputs": [
                    {
                        "name": "start_gas_balance",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "paused",
                "inputs": [],
                "outputs": [
                    {
                        "name": "paused",
                        "type": "bool"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_randomNonce",
                "type": "uint256"
            },
            {
                "key": 2,
                "name": "name",
                "type": "bytes"
            },
            {
                "key": 3,
                "name": "symbol",
                "type": "bytes"
            },
            {
                "key": 4,
                "name": "decimals",
                "type": "uint8"
            },
            {
                "key": 5,
                "name": "wallet_code",
                "type": "cell"
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
                "name": "_randomNonce",
                "type": "uint256"
            },
            {
                "name": "name",
                "type": "bytes"
            },
            {
                "name": "symbol",
                "type": "bytes"
            },
            {
                "name": "decimals",
                "type": "uint8"
            },
            {
                "name": "wallet_code",
                "type": "cell"
            },
            {
                "name": "total_supply",
                "type": "uint128"
            },
            {
                "name": "root_public_key",
                "type": "uint256"
            },
            {
                "name": "root_owner_address",
                "type": "address"
            },
            {
                "name": "start_gas_balance",
                "type": "uint128"
            },
            {
                "name": "paused",
                "type": "bool"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "9d26cb6935c51abe9e1a3a140357bb14c600bde3b9713c92692e3e2dba959cd3",
};
module.exports = {RootTokenContract};
