import { useState, useEffect } from "react";
import { useDispatch, batch } from "react-redux";
import { setOrderList } from "../store/actions/limitOrders";
import fetchLimitOrders from "../utils/fetchLimitOrders";


export default function useFetchAppState() {
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);

    useEffect(async () => {
		setLoading(true);

        const orders = await fetchLimitOrders();
        dispatch(setOrderList(orders));

		setLoading(false);
    }, []);

	return {
		loading,
	};
}