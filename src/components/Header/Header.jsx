/* eslint-disable react/prop-types */
import ToggleTheme from "../ToggleTheme/ToggleTheme"

const Header = ({ user }) => {
    return <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 
        sm:rounded-xl sm:m-5">
        <span className="text-gray-100">Olá, { user?.name || "Usuário" }</span>
        <h1>Alura Newsletter</h1>
        <ToggleTheme className="h-8 text-gray-100 hidden sm:block cursor-pointer" />
    </div>
    
}

export default Header