import { useState, useEffect } from "react";

export default function QuoteSection() {
    const [quote, setQuote] = useState("Click the button to get a Chuck Norris quote!");

    const fetchQuote = async () => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
            if (!response.ok) throw new Error("Failed to fetch quote.");
            const { value } = await response.json();
            setQuote(value);
        } catch {
            setQuote("Problem with internet access occurred.");
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="relative z-10 bg-white border-4 border-[#b3eaf4] p-6 sm:p-8 md:p-10 rounded-lg shadow-lg md:max-w-lg max-[1300px]:mx-auto max-[1300px]:text-center max-[1300px]:flex max-[1300px]:flex-col max-[1300px]:items-center">
            <h2 className="text-[#8dd2e3] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
                Inspiration from Chuck Norris
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-center">{quote}</p>
            <button
                onClick={fetchQuote}
                className="px-6 py-2 border-2 border-black text-black text-sm font-semibold tracking-wide transition duration-200 hover:bg-gray-200"
            >
                Get New Quote
            </button>
        </div>
    );
}
