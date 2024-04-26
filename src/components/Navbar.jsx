import { CartWidget } from "./CartWidget"
import { Categories } from "./Categories"

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-8" >
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white"><img src="https://firebasestorage.googleapis.com/v0/b/calzados-siempre.appspot.com/o/logo%2Flogo1.svg?alt=media&token=06ab8cfc-e556-40d8-90aa-df86624e11dc" className="w-40 h-auto" alt="Logo" /></div>
                    <ul className="flex space-x-4">
                        <Categories />
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}