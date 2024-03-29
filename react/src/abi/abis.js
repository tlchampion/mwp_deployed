[
		{
				"inputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
		},
		{
				"anonymous": false,
				"inputs": [
						{
								"indexed": true,
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						},
						{
								"indexed": false,
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
						}
				],
				"name": "CompanyDeposit",
				"type": "event"
		},
		{
				"anonymous": false,
				"inputs": [
						{
								"indexed": true,
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						},
						{
								"indexed": false,
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
						}
				],
				"name": "CompanyWithdrawal",
				"type": "event"
		},
		{
				"anonymous": false,
				"inputs": [
						{
								"indexed": true,
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						},
						{
								"indexed": false,
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
						}
				],
				"name": "Deposit",
				"type": "event"
		},
		{
				"anonymous": false,
				"inputs": [
						{
								"indexed": true,
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						},
						{
								"indexed": false,
								"internalType": "uint256",
								"name": "index",
								"type": "uint256"
						},
						{
								"indexed": false,
								"internalType": "string",
								"name": "f_name",
								"type": "string"
						},
						{
								"indexed": false,
								"internalType": "string",
								"name": "l_name",
								"type": "string"
						},
						{
								"indexed": false,
								"internalType": "string",
								"name": "email",
								"type": "string"
						},
						{
								"indexed": false,
								"internalType": "string",
								"name": "portfolio",
								"type": "string"
						},
						{
								"indexed": false,
								"internalType": "uint256",
								"name": "balance",
								"type": "uint256"
						}
				],
				"name": "LogNewUser",
				"type": "event"
		},
		{
				"anonymous": false,
				"inputs": [
						{
								"indexed": true,
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						},
						{
								"indexed": false,
								"internalType": "uint256",
								"name": "index",
								"type": "uint256"
						},
						{
								"indexed": false,
								"internalType": "string",
								"name": "f_name",
								"type": "string"
						},
						{
								"indexed": false,
								"internalType": "string",
								"name": "l_name",
								"type": "string"
						},
						{
								"indexed": false,
								"internalType": "string",
								"name": "email",
								"type": "string"
						},
						{
								"indexed": false,
								"internalType": "string",
								"name": "portfolio",
								"type": "string"
						},
						{
								"indexed": false,
								"internalType": "uint256",
								"name": "balance",
								"type": "uint256"
						}
				],
				"name": "LogUpdateUser",
				"type": "event"
		},
		{
				"anonymous": false,
				"inputs": [
						{
								"indexed": true,
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						},
						{
								"indexed": false,
								"internalType": "uint256",
								"name": "index",
								"type": "uint256"
						},
						{
								"indexed": false,
								"internalType": "uint256",
								"name": "balance",
								"type": "uint256"
						}
				],
				"name": "RegisterClient",
				"type": "event"
		},
		{
				"anonymous": false,
				"inputs": [
						{
								"indexed": true,
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						},
						{
								"indexed": false,
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
						}
				],
				"name": "Withdrawal",
				"type": "event"
		},
		{
				"constant": false,
				"inputs": [
						{
								"internalType": "address",
								"name": "_to",
								"type": "address"
						}
				],
				"name": "companyDeposit",
				"outputs": [],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
		},
		{
				"constant": false,
				"inputs": [
						{
								"internalType": "address",
								"name": "_from",
								"type": "address"
						},
						{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
						}
				],
				"name": "companyWithdrawal",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
		},
		{
				"constant": true,
				"inputs": [],
				"name": "getCompanyBalance",
				"outputs": [
						{
								"internalType": "uint256",
								"name": "",
								"type": "uint256"
						}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
		},
		{
				"constant": true,
				"inputs": [],
				"name": "getContractBalance",
				"outputs": [
						{
								"internalType": "uint256",
								"name": "",
								"type": "uint256"
						}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
		},
		{
				"constant": true,
				"inputs": [
						{
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						}
				],
				"name": "getUser",
				"outputs": [
						{
								"internalType": "string",
								"name": "f_name",
								"type": "string"
						},
						{
								"internalType": "string",
								"name": "l_name",
								"type": "string"
						},
						{
								"internalType": "string",
								"name": "email",
								"type": "string"
						},
						{
								"internalType": "string",
								"name": "portfolio",
								"type": "string"
						},
						{
								"internalType": "uint256",
								"name": "balance",
								"type": "uint256"
						},
						{
								"internalType": "uint256",
								"name": "index",
								"type": "uint256"
						}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
		},
		{
				"constant": true,
				"inputs": [
						{
								"internalType": "uint256",
								"name": "index",
								"type": "uint256"
						}
				],
				"name": "getUserAtIndex",
				"outputs": [
						{
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
		},
		{
				"constant": true,
				"inputs": [
						{
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						}
				],
				"name": "getUserBalance",
				"outputs": [
						{
								"internalType": "uint256",
								"name": "",
								"type": "uint256"
						}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
		},
		{
				"constant": true,
				"inputs": [],
				"name": "getUserCount",
				"outputs": [
						{
								"internalType": "uint256",
								"name": "count",
								"type": "uint256"
						}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
		},
		{
				"constant": false,
				"inputs": [
						{
								"internalType": "string",
								"name": "f_name",
								"type": "string"
						},
						{
								"internalType": "string",
								"name": "l_name",
								"type": "string"
						},
						{
								"internalType": "string",
								"name": "email",
								"type": "string"
						},
						{
								"internalType": "string",
								"name": "portfolio",
								"type": "string"
						}
				],
				"name": "insertUpdateUser",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
		},
		{
				"constant": false,
				"inputs": [
						{
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						},
						{
								"internalType": "string",
								"name": "f_name",
								"type": "string"
						},
						{
								"internalType": "string",
								"name": "l_name",
								"type": "string"
						},
						{
								"internalType": "string",
								"name": "email",
								"type": "string"
						},
						{
								"internalType": "string",
								"name": "portfolio",
								"type": "string"
						},
						{
								"internalType": "uint256",
								"name": "balance",
								"type": "uint256"
						}
				],
				"name": "insertUser",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
		},
		{
				"constant": true,
				"inputs": [
						{
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						}
				],
				"name": "isUser",
				"outputs": [
						{
								"internalType": "bool",
								"name": "isIndeed",
								"type": "bool"
						}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
		},
		{
				"constant": false,
				"inputs": [
						{
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						}
				],
				"name": "registerClient",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
		},
		{
				"constant": false,
				"inputs": [
						{
								"internalType": "address payable",
								"name": "_companyAccount",
								"type": "address"
						}
				],
				"name": "setCompanyAccount",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
		},
		{
				"constant": false,
				"inputs": [
						{
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
						},
						{
								"internalType": "string",
								"name": "email",
								"type": "string"
						}
				],
				"name": "updateUserEmail",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
		},
		{
				"constant": false,
				"inputs": [],
				"name": "userDeposit",
				"outputs": [],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
		},
		{
				"constant": false,
				"inputs": [
						{
								"internalType": "address payable",
								"name": "_to",
								"type": "address"
						},
						{
								"internalType": "uint256",
								"name": "amount",
								"type": "uint256"
						}
				],
				"name": "userWithdrawal",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
		}
]
