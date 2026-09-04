import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-green-800 text-white py-4 shadow-md">
            <div id="header-title" className="text-2xl font-bold text-center py-2">Vegard Amundsen</div>
            <nav className="max-w-4xl mx-auto px-4 flex">
                <ul className="py-2 flex justify-center items-center gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}