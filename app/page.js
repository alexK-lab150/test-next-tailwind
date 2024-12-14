"use client" // Specify the Client Component
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-50">
            <Header />
            <main className="relative max-[1300px]:block max-[1300px]:pb-20 flex flex-grow px-8 md:px-20 sm:px-4 items-center max-[1300px]:justify-center max-[1300px]:flex-col max-[1300px]:items-center max-[1300px]:justify-start justify-end w-full bg-[#f5fdff] gap-0">
                <ImageSection />
                <QuoteSection />
            </main>
            <Footer />
        </div>
    );
}
