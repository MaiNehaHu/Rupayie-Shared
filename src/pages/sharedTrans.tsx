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
                setData(result);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
                console.error("Fetch Error:", err);
            }
        };

        fetchData();
    }, [token]);

    return (
        <div>
            <header className="w-full bg-[#4FB92D] sm:px-10 px-6 sm:py-4 py-2 sticky top-0">
                <h1 className="text-white font-semibold sm:text-3xl text-lg">₹ Rupayie</h1>
            </header>

            <>
                {error ? (
                    <p className="text-red-600 font-medium p-10">{error}</p>
                ) : data && (
                    <TransactionsDetails data={data} />
                )}
            </>
        </div>
    );
};

export default SharedTrans;
