export default function Header() {
    return (
        <header className="flex max-[1300px]:justify-center justify-start items-left p-4">
            <div className="w-32 justify-left">
                <img
                    src="/layout-logo-w-s-black.svg"
                    alt="Logo"
                    className="w-full h-auto"
                />
            </div>
        </header>
    );
}
