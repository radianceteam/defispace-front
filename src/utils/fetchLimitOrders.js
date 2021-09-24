import { Account } from "@tonclient/appkit";
import { signerKeys } from "@tonclient/core";
import { LimitOrderRootContract } from "../extensions/contracts/LimitOrderRoot";
import { LimitOrderContract } from "../extensions/contracts/LimitOrder";
import client from "../extensions/webhook/script";

const ROOT_ADDRESS = "0:b0714f34fa96ab8b839b295d26664446101e4afa39da16d7fbe012025aa8699f";
const ROOT_KEY_PAIR = {
	public: "d7310534bb6a0eca344cb1f3903276c97958f316c055f2642a7b82284b22798e",
	secret: "c52e92df2bc6de4026433ffcbeafd746f48043535c11a413c760de42c3aa4cf7",
};

export default async function fetchLimitOrders() {
	const rootAcc = new Account(LimitOrderRootContract, {
		address: ROOT_ADDRESS,
		signer: signerKeys(ROOT_KEY_PAIR),
		client,
	});

	const response = await rootAcc.runLocal("resolveCodeHash", {});

	let hash = response.decoded.output.codeHash;
	hash = hash.substring(2, hash.length);

	const data = (
		await client.net.query_collection({
			collection: "accounts",
			filter: {
				code_hash: { eq: hash },
			},
			result: "id",
		})
	).result;

	const ids = data.map(el => el.id);

	const orders = [];

	for (const id of ids) {
		const orderAcc = new Account(LimitOrderContract, { 
			address: id, 
			client, 
		});

		const res = await orderAcc.runLocal("getInfo", {});

		orders.push(res.decoded.output);
	}

	return orders;
}