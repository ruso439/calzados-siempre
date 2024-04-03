import { FaGlobe, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from "react-router-dom"
export const Categories = () => {
    return (
        <>
            <li className="text-white">
                <Link to={'/'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                    <FaGlobe />
                    </button>
                </Link>

            </li>
            <li className="text-white">
                <Link to={'/category/interior'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                    <FaFacebook />
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/exterior'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                    <FaInstagram />
                    </button>
                </Link>

            </li>
        </>
    )
}