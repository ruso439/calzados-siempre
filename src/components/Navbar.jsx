import { CartWidget } from "./CartWidget"
import { Categories } from "./Categories"

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-8" >
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white"><img src="src\firebase\img\logos\logo1.svg" className="w-20 h-auto" alt="Logo" /></div>
                    <ul className="flex space-x-4">
                        <Categories />
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}