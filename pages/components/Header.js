import Link from 'next/link'
import React from 'react'


const Header = () => {
    return (
        <div className="shadow-lg p-6 bg-purple-600 flex">
            <ul className="space-x-9">
                <li className="items-start">
                    <Link href="/">
                        <a>Logo</a>
                    </Link>
                </li>
                <li className="items-end">
                    <Link href="/">
                        <a>Início</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Sobre</a>
                    </Link>
                </li>
                <li>
                    <Link href="/customers">
                        <a>Nossos Clientes</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header