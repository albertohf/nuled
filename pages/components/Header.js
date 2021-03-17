import Link from 'next/link'
import React from 'react'


const Menu = () => {
    return (
        <ul className="space-x-9">
            <li className="inline">
                <Link href="/">
                    <a>Início</a>
                </Link>
            </li>
            <li className="inline">
                <Link href="/about">
                    <a>Sobre</a>
                </Link>
            </li>
            <li className="inline">
                <Link href="/customers">
                    <a>Nossos Clientes</a>
                </Link>
            </li>
        </ul>
    )
}

const Header = () => {
    return (
        <div className="shadow-lg p-6 flex justify-between bg-purple-600">
            <h1 className="">Nuled Logo</h1>
            <Menu />
        </div>
    )
}

export default Header