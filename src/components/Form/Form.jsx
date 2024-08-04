/* eslint-disable react/prop-types */


const Form = ({ onSubmit }) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name, email})
    }
    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center -mt-20 mx-5 gap-10">
        <input className="alura-input" type="text" required placeholder="Insira seu Nome..." />
        <input className="alura-input" type="email" required placeholder="Insira seu Email..." />
        <button className="alura-button" type="submit">Seguir</button>
    </form>
}

export default Form