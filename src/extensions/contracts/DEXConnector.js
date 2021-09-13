const DEXConnectorContract = {
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
                "name": "deployEmptyWallet",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "expectedWalletAddressCallback",
                "inputs": [
                    {
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "wallet_public_key",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setTransferCallback",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setBouncedCallback",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "transfer",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
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
                "name": "burn",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
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
                "name": "getBalance",
                "inputs": [],
                "outputs": [
                    {
                        "name": "balance",
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
                "name": "dexclient",
                "inputs": [],
                "outputs": [
                    {
                        "name": "dexclient",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "drivenRoot",
                "inputs": [],
                "outputs": [
                    {
                        "name": "drivenRoot",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "driven",
                "inputs": [],
                "outputs": [
                    {
                        "name": "driven",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "statusConnected",
                "inputs": [],
                "outputs": [
                    {
                        "name": "statusConnected",
                        "type": "bool"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "soUINT",
                "type": "uint256"
            },
            {
                "key": 2,
                "name": "dexclient",
                "type": "address"
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
                "name": "dexclient",
                "type": "address"
            },
            {
                "name": "drivenRoot",
                "type": "address"
            },
            {
                "name": "driven",
                "type": "address"
            },
            {
                "name": "statusConnected",
                "type": "bool"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "0f5a8707ef3b2bf17d81e16207e3c48a6e6e7c320590e0dc45038e697de860c3",
};
module.exports = { DEXConnectorContract };