const DEXclientContract = {
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
                        "name": "ownerAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "connectPair",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "statusConnection",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "setPair",
                "inputs": [
                    {
                        "name": "arg0",
                        "type": "address"
                    },
                    {
                        "name": "arg1",
                        "type": "address"
                    },
                    {
                        "name": "arg2",
                        "type": "address"
                    },
                    {
                        "name": "arg3",
                        "type": "address"
                    },
                    {
                        "name": "arg4",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getConnectorAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "connectorSoArg",
                        "type": "uint256"
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
                "name": "connectRoot",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "souint",
                        "type": "uint256"
                    },
                    {
                        "name": "gramsToConnector",
                        "type": "uint128"
                    },
                    {
                        "name": "gramsToRoot",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "statusConnected",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "connectCallback",
                "inputs": [
                    {
                        "name": "wallet",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getAllDataPreparation",
                "inputs": [],
                "outputs": [
                    {
                        "name": "pairKeysR",
                        "type": "address[]"
                    },
                    {
                        "name": "rootKeysR",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "processSwapA",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    },
                    {
                        "name": "qtyA",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "processSwapStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "processSwapB",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    },
                    {
                        "name": "qtyB",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "processSwapStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "processLiquidity",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    },
                    {
                        "name": "qtyA",
                        "type": "uint128"
                    },
                    {
                        "name": "qtyB",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "processLiquidityStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "returnLiquidity",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "returnLiquidityStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "tokensReceivedCallback",
                "inputs": [
                    {
                        "name": "token_wallet",
                        "type": "address"
                    },
                    {
                        "name": "token_root",
                        "type": "address"
                    },
                    {
                        "name": "amount",
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
                        "name": "sender_wallet",
                        "type": "address"
                    },
                    {
                        "name": "original_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "updated_balance",
                        "type": "uint128"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getCallback",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "token_wallet",
                        "type": "address"
                    },
                    {
                        "name": "token_root",
                        "type": "address"
                    },
                    {
                        "name": "amount",
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
                        "name": "sender_wallet",
                        "type": "address"
                    },
                    {
                        "name": "original_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "updated_balance",
                        "type": "uint128"
                    },
                    {
                        "name": "payload_arg0",
                        "type": "uint8"
                    },
                    {
                        "name": "payload_arg1",
                        "type": "address"
                    },
                    {
                        "name": "payload_arg2",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getBalance",
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
                "name": "createNewPair",
                "inputs": [
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    },
                    {
                        "name": "pairSoArg",
                        "type": "uint256"
                    },
                    {
                        "name": "connectorSoArg0",
                        "type": "uint256"
                    },
                    {
                        "name": "connectorSoArg1",
                        "type": "uint256"
                    },
                    {
                        "name": "rootSoArg",
                        "type": "uint256"
                    },
                    {
                        "name": "rootName",
                        "type": "bytes"
                    },
                    {
                        "name": "rootSymbol",
                        "type": "bytes"
                    },
                    {
                        "name": "rootDecimals",
                        "type": "uint8"
                    },
                    {
                        "name": "grammsForPair",
                        "type": "uint128"
                    },
                    {
                        "name": "grammsForRoot",
                        "type": "uint128"
                    },
                    {
                        "name": "grammsForConnector",
                        "type": "uint128"
                    },
                    {
                        "name": "grammsForWallet",
                        "type": "uint128"
                    },
                    {
                        "name": "grammsTotal",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getPairData",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "pairStatus",
                        "type": "bool"
                    },
                    {
                        "name": "pairRootA",
                        "type": "address"
                    },
                    {
                        "name": "pairWalletA",
                        "type": "address"
                    },
                    {
                        "name": "pairRootB",
                        "type": "address"
                    },
                    {
                        "name": "pairWalletB",
                        "type": "address"
                    },
                    {
                        "name": "pairRootAB",
                        "type": "address"
                    },
                    {
                        "name": "curPair",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "sendTokens",
                "inputs": [
                    {
                        "name": "tokenRoot",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "sendTokenStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "sendTransaction",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "flags",
                        "type": "uint8"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "rootDEX",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rootDEX",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "soUINT",
                "inputs": [],
                "outputs": [
                    {
                        "name": "soUINT",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "codeDEXConnector",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeDEXConnector",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "owner",
                "inputs": [],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "rootKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rootKeys",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "rootWallet",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rootWallet",
                        "type": "map(address,address)"
                    }
                ]
            },
            {
                "name": "rootConnector",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rootConnector",
                        "type": "map(address,address)"
                    }
                ]
            },
            {
                "name": "counterCallback",
                "inputs": [],
                "outputs": [
                    {
                        "name": "counterCallback",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "pairs",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "status",
                                "type": "bool"
                            },
                            {
                                "name": "rootA",
                                "type": "address"
                            },
                            {
                                "name": "walletA",
                                "type": "address"
                            },
                            {
                                "name": "rootB",
                                "type": "address"
                            },
                            {
                                "name": "walletB",
                                "type": "address"
                            },
                            {
                                "name": "rootAB",
                                "type": "address"
                            }
                        ],
                        "name": "pairs",
                        "type": "map(address,tuple)"
                    }
                ]
            },
            {
                "name": "pairKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "pairKeys",
                        "type": "address[]"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "rootDEX",
                "type": "address"
            },
            {
                "key": 2,
                "name": "soUINT",
                "type": "uint256"
            },
            {
                "key": 3,
                "name": "codeDEXConnector",
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
                "name": "rootDEX",
                "type": "address"
            },
            {
                "name": "soUINT",
                "type": "uint256"
            },
            {
                "name": "codeDEXConnector",
                "type": "cell"
            },
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "rootKeys",
                "type": "address[]"
            },
            {
                "name": "rootWallet",
                "type": "map(address,address)"
            },
            {
                "name": "rootConnector",
                "type": "map(address,address)"
            },
            {
                "components": [
                    {
                        "name": "root_address",
                        "type": "address"
                    },
                    {
                        "name": "souint",
                        "type": "uint256"
                    },
                    {
                        "name": "status",
                        "type": "bool"
                    }
                ],
                "name": "connectors",
                "type": "map(address,tuple)"
            },
            {
                "name": "counterCallback",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "name": "token_wallet",
                        "type": "address"
                    },
                    {
                        "name": "token_root",
                        "type": "address"
                    },
                    {
                        "name": "amount",
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
                        "name": "sender_wallet",
                        "type": "address"
                    },
                    {
                        "name": "original_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "updated_balance",
                        "type": "uint128"
                    },
                    {
                        "name": "payload_arg0",
                        "type": "uint8"
                    },
                    {
                        "name": "payload_arg1",
                        "type": "address"
                    },
                    {
                        "name": "payload_arg2",
                        "type": "address"
                    }
                ],
                "name": "callbacks",
                "type": "map(uint256,tuple)"
            },
            {
                "components": [
                    {
                        "name": "status",
                        "type": "bool"
                    },
                    {
                        "name": "rootA",
                        "type": "address"
                    },
                    {
                        "name": "walletA",
                        "type": "address"
                    },
                    {
                        "name": "rootB",
                        "type": "address"
                    },
                    {
                        "name": "walletB",
                        "type": "address"
                    },
                    {
                        "name": "rootAB",
                        "type": "address"
                    }
                ],
                "name": "pairs",
                "type": "map(address,tuple)"
            },
            {
                "name": "pairKeys",
                "type": "address[]"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "d3c7767dea81401f995454385c5941fb0e41d0063333e560ba29e42a73ab4962",
};
module.exports = { DEXclientContract };
