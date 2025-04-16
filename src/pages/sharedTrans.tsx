import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TransactionsDetails from "../components/transactionsDetails";

const API_URL = import.meta.env.VITE_API_URL

const SharedTrans = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const { token } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                setError("Invalid or missing token.");
                return;
            }

            try {
                const response = await fetch(`${API_URL}/api/share-link/shared/${token}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data from server");
                }

                const result = await response.json();
                setData(result.transactions);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
                console.error("Fetch Error:", err);
            }
        };

        fetchData();
    }, [token]);

    return (
        <div>
            <header className="w-full bg-[#4FB92D] px-10 py-4">
                <h1 className="text-white font-semibold text-3xl">₹ Rupayie</h1>
            </header>

            <div className="p-10">
                {error ? (
                    <p className="text-red-600 font-medium">{error}</p>
                ) : (
                    <TransactionsDetails data={data} />
                )}
            </div>
        </div>
    );
};

export default SharedTrans;
