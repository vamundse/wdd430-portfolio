export default function Footer() {
    return (
        <footer className="bg-green-800 text-white py-4 mt-12">
            <div className="container x-auto text-center">
                <p>&copy; {new Date().getFullYear()} | Vegard Amundsen | All rights reserved</p>            </div>
        </footer>
    );
}