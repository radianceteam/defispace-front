const DEXRootContract = {
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
                "outputs": [
                    {
                        "name": "isSuccess",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "setDEXpairCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": [
                    {
                        "name": "isSuccess",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "setDEXconnectorCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": [
                    {
                        "name": "isSuccess",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "setRootTokenCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": [
                    {
                        "name": "isSuccess",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "setTONTokenWalletCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": [
                    {
                        "name": "isSuccess",
                        "type": "bool"
                    }
                ]
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
                "name": "encodePayload",
                "inputs": [
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": [
                    {
                        "name": "arg0",
                        "type": "uint8"
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
                        "type": "uint128"
                    },
                    {
                        "name": "arg4",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "computeCodeHash",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "hashRootTokenContract",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
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
    code: "te6ccgECbQEAGnwABCSK7VMg4wMgwP/jAiDA/uMC8gtqBAFsAQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rkbAwEU0x8B2zz4R27yfAUCku1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHACCfMCHXDR/yvCHAACCSbCHe3+MCAds8+Edu8nxnBQM8IIIQNmc+qbvjAiCCEHKTNXa74wIgghB+7CHuu+MCQBUGAiggghB5jHuQu+MCIIIQfuwh7rvjAgsHAzwgghB6XwGhuuMCIIIQfbRzg7rjAiCCEH7sIe664wIKCQgBUjDR2zz4USGOHI0EcAAAAAAAAAAAAAAAAD+7CHugyM70AMlw+wDef/hnaQFQMNHbPPhMIY4bjQRwAAAAAAAAAAAAAAAAP20c4ODIzszJcPsA3n/4Z2kBUDDR2zz4TiGOG40EcAAAAAAAAAAAAAAAAD6XwGhgyM7MyXD7AN5/+GdpBFAgghB1g2OeuuMCIIIQdyYKXbrjAiCCEHiwfG664wIgghB5jHuQuuMCFA8NDAFSMNHbPPhZIY4cjQRwAAAAAAAAAAAAAAAAPmMe5CDIzvQAyXD7AN5/+GdpA4Qw+Eby4Ez4Qm7jANTR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAPiwfG6M8WygDJcPsAkTDi2zx/+GdpDmgAKnD4RSBukjBw3vhCuvLgZTD4APhtfwNcMPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/6QZXU0dD6QN/R2zzbPH/4Z2kQaAH8aKb7YPLQSPhJ+FOBAQv0Cm+hMfLgbvgnbxBopv5gobV/cvsC+Ekg+FOBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3ySNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbMgEQH2jlYwI40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFsyCOKTAijQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWz3t6OgI4bIfhTgQEL9Fkw+HMgyM+FiM6Ab89AyYEAgPsA4l8FEgL+IvhUgQEL9AuOgI5ujQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbwPiIm9QJVsTAXhvUSRvUiP4VCLbPMlZgQEL9BP4dDAiyM+FiM6NBYAAAAAAAAAAAAAAAAAAP/vSPgmwFr5AzxbJgQCA+wBaAVIw0ds8+FQhjhyNBHAAAAAAAAAAAAAAAAA9YNjnoMjO9ADJcPsA3n/4Z2kEUCCCEFD+d8e74wIgghBZtdPIu+MCIIIQYxYeZbvjAiCCEHKTNXa74wIyKB8WBFAgghBnLbiNuuMCIIIQaLVfP7rjAiCCEGr64tO64wIgghBykzV2uuMCHhoZFwOaMPhG8uBM+EJu4wDTH/hEWG91+GTXDf+V1NHQ0//f1w3/ldTR0NP/39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk8pM1drOzclw+wBpGGMApPhEcG9ycG9xgEBvdPhkXG0iyMv/cFiAQPRD+ChxWIBA9BYByMv/cliAQPRD+E1zWIBA9BfI9ADJ+EvIz4SA9AD0AM+ByfkAyM+KAEDL/8nQbDEBXjDR2zz4VyGOIo0EcAAAAAAAAAAAAAAAADq+uLTgyM4BbyICyx/0AMlw+wDef/hnaQJAMPhCbuMA+Ebyc9H4QvhFIG6SMHDeuvLgZvgA2zx/+GcbaAIW7UTQ10nCAYqOgOJpHAQ8cO1E0PQFcSGAQPQOk9cL/5Fw4vhqiPhriPhsiPhtbGxsHQJwiPhuiPhvbfhwbfhxcG1vAvhybfhzbfh0bfh1bfh2cG1vAvh3bfh4bfh5gED0DvK91wv/+GJw+GNsbAFSMNHbPPhWIY4cjQRwAAAAAAAAAAAAAAAAOctuI2DIzvQAyXD7AN5/+GdpBFAgghBaZQ3+uuMCIIIQXWTR1rrjAiCCEGG5usS64wIgghBjFh5luuMCJiQiIAOsMPhG8uBM+EJu4wDTH/hEWG91+GTXDf+V1NHQ0//f1w3/ldTR0NP/3/pBldTR0PpA39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk4xYeZbOzclw+wBpIWMAlPhEcG9ycG9xgEBvdPhkXzJtI8jL/3BYgED0QyLIy/9xWIBA9EMBcliAQPQWyPQAyfhNyM+EgPQA9ADPgcn5AMjPigBAy//J0GxRAlYw+Eby4Ez6QZXU0dD6QN/XDX+V1NHQ03/f1wwAldTR0NIA39HbPOMAf/hnI2gAUvhFIG6SMHDe+EK68uBl+AABXyLIz4WAygBzz0DOAfoCgGvPQMlw+wBbA+Iw+Eby4Ez4Qm7jANMf+ERYb3X4ZNcN/5XU0dDT/9/XDf+V1NHQ0//f+kGV1NHQ+kDf+kGV1NHQ+kDf+kGV1NHQ+kDf+kGV1NHQ+kDf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TdZNHWs7NyXD7AGklYwDe+ERwb3Jwb3GAQG90+GRfZW0myMv/cFiAQPRD+ChxWIBA9BYlyMv/cliAQPRDJHNYgED0FvhNdFiAQPQXI3VYgED0FiJ2WIBA9BYBd1iAQPQWyPQAyfhMyM+EgPQA9ADPgcn5AMjPigBAy//J0GyxA4ww+Eby4Ez4Qm7jANTR2zwljisn0NMB+kAwMcjPhyDOcc8LYV5AyM+TaZQ3+ssHzlUgyM7Lf8t/zc3JcPsAkl8F4uMAf/hnaSdoABjQ0wf6QPpA03/TfzAEUCCCEFKL7U+64wIgghBVJ7K6uuMCIIIQVuRxRrrjAiCCEFm108i64wIvLCspA4Qw+Eby4Ez4Qm7jANTR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAANm108iM8WygDJcPsAkTDi2zx/+GdpKmgAKnD4RSBukjBw3vhCuvLgZTD4APhrfwFSMNHbPPhTIY4cjQRwAAAAAAAAAAAAAAAANbkcUaDIzvQAyXD7AN5/+GdpA4ow+Eby4Ez4Qm7jAPpBldTR0PpA39HbPCKOIyTQ0wH6QDAxyM+HIM5xzwthAsjPk1SeyurOAcjOzc3JcPsAkVvi4wB/+GdpLWgCXI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAH4UYEBC/QLjoBbLgDujm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARvA+IgbxAybxEDTjD4RvLgTPhCbuMA1w3/ldTR0NP/39cN/5XU0dDT/9/R2zzjAH/4Z2kwaAH+aKb7YPLQSPgnbxBopv5gobV/cvsC+CdvEIIQO5rKAL7y4GwhwwAgnTAh+FWBAQD0Dm+hMbPe8uBqaKb+YIIQO5rKAL7y4G1tIsjL/3BYgED0Q/gocViAQPQWAcjL/3JYgED0Q/hNc1iAQPQXyPQAyfhLyM+EgPQA9ADPgcn4STEAdAEg+QDIz4oAQMv/ydBZIsjPhQjOi+AAAAAAAAAAAAAAAAAAcM8WzM+DAcjPkR1ZU3LOzcmBAID7AFsEUCCCEDoFa2O64wIgghA80Xk5uuMCIIIQTH2Ks7rjAiCCEFD+d8e64wI9PDQzAVAw0ds8+EshjhuNBHAAAAAAAAAAAAAAAAA0P53x4MjOzMlw+wDef/hnaQL6MPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/XDf+V1NHQ0//f1w3/ldTR0NP/39cN/5XU0dDT/9/XDf+V1NHQ0//fINdKwAGT1NHQ3tQg10vAAQHAALCT1NHQ3tTXDQeV1NHQ0wff1w1/ldTR0NN/39cNf5XU0dDTf99pNQI41w1/ldTR0NN/39cNf5XU0dDTf9/R2zzbPH/4ZzZoAd74J28QghA7msoAvvLgbCyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbMgjikwK40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFs97y4GgjghA7msoAviA3AcKOIjAighA7msoAviCOFTAhghA7msoAviCZMCCCEDuaygC+3t7e8uBp+CdvEGim/mChtX9y+wIjciOotX+gtX9yIqi1f6C1fyOgtX+CEB3NZQCgtX/4SfhWgQEL9ApvoTEgOAH+jkswaKb+YCG+II5AMF8txwWzII42MFPN+FCBAQv0CpL0BZFt4oEBC/QKb6ExsyCOGTBfLfhQgQEL9AqS9AWRbeKBAQv0Cm+hMbPe3t7e8uBwbfhJ+FaBAQv0CpPXC/+RcOLIy/9wWIBA9EMpyMv/cViAQPRDKHJYgED0FydzWDkB/oBA9BcmyMsHdFiAQPRD+E91WIBA9BfI9ADJ+E7Iz4SA9AD0AM+BySD5AMjPigBAy//J0G34SfhWgQEL9AqT1wv/kXDiyMv/cFiAQPRD+ChxWIBA9BYuyMv/cliAQPRD+ElzWIBA9Bb4TXRYgED0F1YQdViAQPQWL3ZYgED0FiE6Af53WIBA9BbI9ADJ+EzIz4SA9AD0AM+ByVR0XFYQU0T5AMjPigBAy//J0FVALXItqLV/oLV/ciyotX+gtX+CEB3NZQCgtX8myM+FCM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPg1UwyM+QyAlWIsv/y//Lf8t/zclw+wAgcFNV+QDIOwCyz4oAQMv/ydBVIFOzyM+FCM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPg1nIz5AHVPR2y//Ozclw+wAw+FP4SVmBAQv0Evhz+EnIz4WIzoBvz0DJgQCA+wCAEWUBUDDR2zz4TyGOG40EcAAAAAAAAAAAAAAAAC80Xk5gyM7MyXD7AN5/+GdpA14w+Eby4Ez4Qm7jANcN/5XU0dDT/9/6QZXU0dD6QN/6QZXU0dD6QN/R2zzbPH/4Z2k+aAHSaKb7YPLQSPgnbxBopv5gobV/cvsCIsMAII4dMCL4VYEBAPQOb6ExsyCdMCH4VoEBC/QKb6Exs97e8uBxIvhVI1mBAQD0Fvh1IfhWJMjL/1mBAQv0Qfh2IfhXbyIhpFUggCD0Fm8C+HcgPwB6jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWS+EmRIOLIz4WIzoBvz0DJgQCA+wBfAwRQIIIQDB3IsrvjAiCCEBg+9pS74wIgghAv5QV3u+MCIIIQNmc+qbvjAl1ORkEEUCCCEDDSeLS64wIgghAzNqVSuuMCIIIQNClNHrrjAiCCEDZnPqm64wJFRENCAV4w0ds8+FIhjiKNBHAAAAAAAAAAAAAAAAAtmc+qYMjOAW8iAssf9ADJcPsA3n/4Z2kBUjDR2zz4VSGOHI0EcAAAAAAAAAAAAAAAAC0KU0egyM70AMlw+wDef/hnaQFSMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAALM2pVKDIzsv/yXD7AN5/+GdpA5Qw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPksNJ4tLOzclw+wCRMOLjAH/4Z2lLaARQIIIQGo9oqbrjAiCCEB6KIZa64wIgghAlw5YWuuMCIIIQL+UFd7rjAkxKSUcDhDD4RvLgTPhCbuMA1NHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAr+UFd4zxbKAMlw+wCRMOLbPH/4Z2lIaAAqcPhFIG6SMHDe+EK68uBlMPgA+G9/AVIw0ds8+FghjhyNBHAAAAAAAAAAAAAAAAApcOWFoMjO9ADJcPsA3n/4Z2kDlDD4RvLgTPhCbuMA+kGV1NHQ+kDf+kGV1NHQ+kDf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SeiiGWs7NyXD7AJEw4uMAf/hnaUtoAHQB+FCBAQv0CpL0BZFt4oEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfA4Iw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAmo9oqYzxbL/8lw+wCRMOLjAH/4Z2lNaAAI+E75AARQIIIQE2AtfLrjAiCCEBO6y4y64wIgghAWo4QMuuMCIIIQGD72lLrjAlRSUU8DhDD4RvLgTPhCbuMA1NHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAmD72lIzxbKAMlw+wCRMOLbPH/4Z2lQaAAqcPhFIG6SMHDe+EK68uBlMPgA+Gx/AVAw0ds8+E0hjhuNBHAAAAAAAAAAAAAAAAAlqOEDIMjOzMlw+wDef/hnaQOEMPhG8uBM+EJu4wDU0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACTusuMjPFsv/yXD7AJEw4uMAf/hnaVNoAAT5AAO2MPhG8uBM+EJu4wDU1NMH1w3/ldTR0NP/3/pBldTR0PpA39cNf5XU0dDTf99VUG8GAdH4SfhUgQEL9ApvoTHy4G/4J28QaKb+YKG1f3L7AvhJIPhUgQEL9AuOgGlbVQH4jm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARvA+IgbxAg+FOBAQv0ClYC0I4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3yRvE8AAIJcwJG8UIscF3o6AjiYh+FOBAQv0WTD4cyP4VIEBC/RZMPh0IMjPhYjOgG/PQMmBAID7AOJfBds8f/hnV2gC1PhQI28RAVyBAQv0CpL0BZFt4iVvEgElWYEBC/QSyPQAWYEBC/RBIPhwI28SAVyBAQv0CpL0BZFt4iVvEQElWYEBC/QSyPQAWYEBC/RB+HAh+FJvIiGkVSCAIPQWbwL4ciH4UYEBC/QLjoBbWAH+jm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARvA+IjbxFvUCNvEm9RJG9SIlkBavhRIts8yVmBAQv0E/hxMCH4U4EBC/RZMPhzI/hUgQEL9Fkw+HQgyM+FiM6Ab89AyYEAgPsAWgAabyMCyM5ZyM4ByM7NzQEG0Ns8XAAu+kD6QZXU0dD6QN/6QZXU0dD6QN/RbwMETiCCC8H4IrrjAiCCEAQB9pS64wIgghAIwAzpuuMCIIIQDB3IsrrjAmViYF4DiDD4RvLgTPhCbuMA1w3/ldTR0NP/39HbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPkjB3IsrKAM7NyXD7AJFb4uMAf/hnaV9oAHQg+FWBAQD0Dm+hMQH4VYEBAPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfAngw+Eby4EzR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAIjADOmM8Wy3/JcPsAkTDi4wB/+GdhaAAI+CdvEAPiMPhG8uBM+EJu4wDTH/hEWG91+GTXDf+V1NHQ0//f1w3/ldTR0NP/3yDXSsABk9TR0N7UINdLwAEBwACwk9TR0N7U1w0HldTR0NMH39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkhAH2lLOzclw+wBpZGMBdo4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnaADG+ERwb3Jwb3GAQG90+GRfVG0lyMv/cFiAQPRDJMjL/3FYgED0QyNyWIBA9Bcic1iAQPQXAcjLB3RYgED0Q/hPdViAQPQXyPQAyfhOyM+EgPQA9ADPgcn5AMjPigBAy//J0GyRA4Qw+Eby4Ez4Qm7jANTR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAIPB+CKM8WygDJcPsAkTDi2zx/+GdpZmgAKnD4RSBukjBw3vhCuvLgZTD4APhufwK6+Eby4Ez4Qm7jAGim/mCCEDuaygC+8uBraKb+YPhJ+FhcgQEL9AqT1wt/kXDiVQKgtX/Iy39ZgQEL9EH4eGim/GAgxwCOEyDTH9Qz+En4WSJZgQEL9BP4eVvfMNs8aWgAyvhZ+Fj4V/hW+FX4VPhT+FL4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PL/8zMzFWwyMzM9ABVgMj0AAFvIgLLH/QA9ABVUMj0APQA9ABVIMgBbyICyx/0APQA9ADNzc3Nye1UAMTtRNDT/9M/0wAx0//U1NTU0dDU1PQE1NHQ9ATTH/QEWW8CAfQE1NHQ9AT0BPQE1NHQ0x/0BFlvAgH0BPQE0fh5+Hj4d/h2+HX4dPhz+HL4cfhw+G/4bvht+Gz4a/hq+GP4YgIK9KQg9KFsawAUc29sIDAuNDguMAAA",
    codeHash: "9bfcccf44897c98cc330c01c86cd713fbc5bee12e329ced6f920c9759af09754",
};
module.exports = {DEXRootContract};