import Link from 'next/link'

const Menu = () => {
    return (
        <div className="">
            <ul className="space-x-9">
                <li className="inline-block">
                    <Link href="/">
                        <a>Início</a>
                    </Link>
                </li>
                <li className="inline-block">
                    <Link href="/about">
                        <a>Sobre</a>
                    </Link>
                </li>
                <li className="inline-block">
                    <Link href="/customers">
                        <a>Nossos Clientes</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <div className="shadow-lg p-6 flex justify-between itens-center bg-purple-600">
            <h1 className="">Nuled Logo</h1>
            <Menu />
        </div>
    )
}

export default Header