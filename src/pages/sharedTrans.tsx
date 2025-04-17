import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TransactionsDetails from "../components/transactionsDetails";
import { FiDownload } from "react-icons/fi";

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

    const handlePrint = () => {
        const content = document.getElementById('print-section')?.innerHTML;
        if (!content) return;

        const win = window.open('', '', 'height=700,width=900');
        if (win) {
            win.document.write('<html><head><title>Print</title>');

            // ✅ Include Google Fonts explicitly
            win.document.write(`
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
                <style>
                  body { font-family: 'Poppins', sans-serif; }
                </style>
              `);

            // Also include your Tailwind or global styles
            Array.from(document.querySelectorAll('link[rel="stylesheet"], style')).forEach((el) => {
                win?.document.write(el.outerHTML);
            });

            win.document.write('</head><body>');
            win.document.write(content);
            win.document.write('</body></html>');
            win.document.close();
            win.focus();
            setTimeout(() => {
                win.print();
                win.close();
            }, 500);
        }
    }

    
    return (
        <div className={`${error ? "bg-white" : data.length > 0 ? "bg-gray-200" : "bg-[#fcfbed]"}` + " min-h-screen"}>
            <header className="w-full bg-[#4FB92D] sm:px-10 px-4 sm:py-4 py-2 sticky top-0 flex flex-row justify-between">
                <h1 className="text-white font-semibold sm:text-3xl text-xl">₹ Rupayie</h1>

                <button
                    onClick={handlePrint}
                    className="flex flex-row items-center gap-2 sm:px-4 px-2 sm:py-2 py-1 sm:rounded-xl rounded-lg bg-white cursor-pointer hover:bg-gray-100 transition-colors font-medium font-['Poppins']"
                >
                    <h3 className="text-[#4FB92D] sm:text-base text-xs">
                        Download
                    </h3>
                    <FiDownload className="text-[#4FB92D] sm:text-base text-xs" />
                </button>
            </header>

            <>
                {error ? (
                    <div className="w-full flex flex-row justify-center items-center">
                        <img className="pointer-events-none w-[75%]" src="https://freefrontend.com/assets/img/500-error-page-html-templates/Error-500-alert.gif" alt="" />
                    </div>
                ) : data.length > 0 ? (
                    <>
                        <TransactionsDetails data={data} />
                    </>
                ) : (
                    <div className="w-full flex flex-row justify-center items-center sm:mt-36 mt-10">
                        <img className="pointer-events-none sm:w-1/4 w-[60%]" src="https://cdn.dribbble.com/userupload/19248258/file/original-14b7591104f6dde68b8526dcddb6f02f.gif" alt="" />
                    </div>
                )}
            </>
        </div>
    );
};

export default SharedTrans;
