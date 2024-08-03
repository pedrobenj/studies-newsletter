/* eslint-disable react/prop-types */
import Input from "../Input/Input"

const Form = ({ onSubmit }) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name, email})
    }
    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center -mt-20 mx-5 gap-10">
        <Input  type="text" required placeholder="Insira seu Nome..." />
        <Input type="email" required placeholder="Insira seu Email..." />
        <button className="text-gray-200 px-4 py-1 w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full 
        m-4 uppercase outline-none hover:animate-pulse hover:shadow-sm hover:shadow-gray-500 hover:dark:shadow-black" type="submit">Seguir</button>
    </form>
}

export default Form