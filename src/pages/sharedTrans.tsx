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
        <div className={`${error ? "bg-white" : data.length > 0 ? "bg-gray-200" : "bg-[#fcfbed]"}` + " min-h-screen"}>
            <header className="w-full bg-[#4FB92D] sm:px-10 px-6 sm:py-4 py-2 sticky top-0">
                <h1 className="text-white font-semibold sm:text-3xl text-lg">₹ Rupayie</h1>
            </header>

            <>
                {error ? (
                    <div className="w-full flex flex-row justify-center items-center">
                        <img className="w-[75%]" src="https://freefrontend.com/assets/img/500-error-page-html-templates/Error-500-alert.gif" alt="" />
                    </div>
                ) : data.length > 0 ? (
                    <>
                        <TransactionsDetails data={data} />
                    </>
                ) : (
                    <div className="w-full flex flex-row justify-center items-center sm:mt-36 mt-10">
                        <img className="sm:w-1/4 w-[60%]" src="https://cdn.dribbble.com/userupload/19248258/file/original-14b7591104f6dde68b8526dcddb6f02f.gif" alt="" />
                    </div>
                )}
            </>
        </div>
    );
};

export default SharedTrans;
