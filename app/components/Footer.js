import { useState, useEffect } from "react";

export default function Footer() {
    const [visitorCount, setVisitorCount] = useState(null);
    const [error, setError] = useState(null);

    // increased and get the number of visitors
    const fetchVisitorCount = async () => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, { method: "POST" });
            if (!response.ok) throw new Error("Failed to fetch visitor count.");
            const data = await response.json();
            setVisitorCount(data.count);
        } catch (err) {
            console.error("Error fetching visitor count:", err);
            setError("Unable to load visitor count.");
        }
    };

    useEffect(() => {
        fetchVisitorCount();
    }, []);

    return (
        <footer className="w-full bg-gray-800 text-white text-center py-4 z-10 shadow-inner">
            {error ? (
                <p className="text-red-400 font-semibold">{error}</p>
            ) : (
                <p>
                    Visitors:{" "}
                    <span className="font-bold">
                        {visitorCount !== null ? visitorCount : "Loading..."}
                    </span>
                </p>
            )}
        </footer>
    );
}
