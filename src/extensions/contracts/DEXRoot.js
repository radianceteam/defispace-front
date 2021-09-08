const DEXrootContract = {
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
                "inputs": [],
                "outputs": []
            },
            {
                "name": "sendTransfer",
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "setDEXclientCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setDEXpairCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setDEXconnectorCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setRootTokenCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setTONTokenWalletCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getClientAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "clientPubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "clientSoArg",
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
                "name": "createDEXclient",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    },
                    {
                        "name": "souint",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createDEXclientCallback",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    },
                    {
                        "name": "deployedAddress",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getPairAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "pairPubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "pairSoArg",
                        "type": "uint256"
                    },
                    {
                        "name": "pairCreator",
                        "type": "address"
                    },
                    {
                        "name": "pairRootA",
                        "type": "address"
                    },
                    {
                        "name": "pairRootB",
                        "type": "address"
                    },
                    {
                        "name": "pairRootAB",
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
                "name": "getRootTokenAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "rootPubKey",
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
                "name": "getConnectorAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "connectorPubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "connectorSoArg",
                        "type": "uint256"
                    },
                    {
                        "name": "connectorCommander",
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
                "name": "createDEXpair",
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "createDEXpairCallback",
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
                        "name": "root01",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDetailsCallback",
                "inputs": [
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
                ],
                "outputs": []
            },
            {
                "name": "getPairByRoots01",
                "inputs": [
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getPairByRoots10",
                "inputs": [
                    {
                        "name": "root1",
                        "type": "address"
                    },
                    {
                        "name": "root0",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getRootsByPair",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "checkPubKey",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "status",
                        "type": "bool"
                    },
                    {
                        "name": "dexclient",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getBalanceTONgrams",
                "inputs": [],
                "outputs": [
                    {
                        "name": "balanceTONgrams",
                        "type": "uint128"
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
                "name": "codeDEXclient",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeDEXclient",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeDEXpair",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeDEXpair",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeDEXconnector",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeDEXconnector",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeRootToken",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeRootToken",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeTONTokenWallet",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeTONTokenWallet",
                        "type": "cell"
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
                                "name": "root0",
                                "type": "address"
                            },
                            {
                                "name": "root1",
                                "type": "address"
                            },
                            {
                                "name": "rootLP",
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
            },
            {
                "name": "creatorForPair",
                "inputs": [],
                "outputs": [
                    {
                        "name": "creatorForPair",
                        "type": "map(address,address)"
                    }
                ]
            },
            {
                "name": "dataForRootAB",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "pair",
                                "type": "address"
                            },
                            {
                                "name": "root0",
                                "type": "address"
                            },
                            {
                                "name": "root1",
                                "type": "address"
                            }
                        ],
                        "name": "dataForRootAB",
                        "type": "map(address,tuple)"
                    }
                ]
            },
            {
                "name": "pubkeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "pubkeys",
                        "type": "map(uint256,address)"
                    }
                ]
            },
            {
                "name": "clients",
                "inputs": [],
                "outputs": [
                    {
                        "name": "clients",
                        "type": "map(address,uint256)"
                    }
                ]
            },
            {
                "name": "clientKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "clientKeys",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "balanceOf",
                "inputs": [],
                "outputs": [
                    {
                        "name": "balanceOf",
                        "type": "map(address,uint128)"
                    }
                ]
            },
            {
                "name": "msgOf",
                "inputs": [],
                "outputs": [
                    {
                        "name": "msgOf",
                        "type": "map(address,string)"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "soUINT",
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
                "name": "soUINT",
                "type": "uint256"
            },
            {
                "name": "codeDEXclient",
                "type": "cell"
            },
            {
                "name": "codeDEXpair",
                "type": "cell"
            },
            {
                "name": "codeDEXconnector",
                "type": "cell"
            },
            {
                "name": "codeRootToken",
                "type": "cell"
            },
            {
                "name": "codeTONTokenWallet",
                "type": "cell"
            },
            {
                "name": "roots",
                "type": "map(address,map(address,address))"
            },
            {
                "components": [
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    },
                    {
                        "name": "rootLP",
                        "type": "address"
                    }
                ],
                "name": "pairs",
                "type": "map(address,tuple)"
            },
            {
                "name": "pairKeys",
                "type": "address[]"
            },
            {
                "name": "creatorForPair",
                "type": "map(address,address)"
            },
            {
                "components": [
                    {
                        "name": "pair",
                        "type": "address"
                    },
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    }
                ],
                "name": "dataForRootAB",
                "type": "map(address,tuple)"
            },
            {
                "name": "pubkeys",
                "type": "map(uint256,address)"
            },
            {
                "name": "clients",
                "type": "map(address,uint256)"
            },
            {
                "name": "clientKeys",
                "type": "address[]"
            },
            {
                "name": "balanceOf",
                "type": "map(address,uint128)"
            },
            {
                "name": "msgOf",
                "type": "map(address,string)"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "06cd2fa20f4b9fd261c772f9481bfa2d2d3d218f30065354707478692cfbc048",
};
module.exports = { DEXrootContract };
