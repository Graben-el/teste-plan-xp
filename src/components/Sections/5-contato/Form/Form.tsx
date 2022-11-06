import { VscArrowRight } from "react-icons/vsc"
import { FormWrapper } from "../styles"
import { useState, ChangeEvent } from 'react'



export const Form: React.FC = () => {
    const [input, setInput] = useState<any>({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    })

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        setInput({
            nome: '',
            email: '',
            telefone: '',
            mensagem: ''
        })
        alert('Mensagem enviada com sucesso! Em breve retornaremos o contato.')
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    return (
        <FormWrapper onSubmit={handleSubmit}>

            <label htmlFor='nome'>Nome :</label>
            <input value={input.nome} type="text" name="nome" id="nome" onChange={handleChange} />

            <div className="wrapper">
                <div className="input-wrapper">
                    <label htmlFor='email'>E-mail :</label>
                    <input value={input.email} type='email' name="email" id="email" required onChange={handleChange} />
                </div>

                <div className="input-wrapper">
                    <label htmlFor='telefone'>Telefone :</label>
                    <input value={input.telefone} type='tel' name="telefone" id="telefone" onChange={handleChange} />
                </div>
            </div>

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea name="mensagem" id="mensagem" defaultValue={input.mensagem}></textarea>

            <div className="submit-wrapper">
                <input type="submit" value='Enviar' className="submit" onChange={handleChange} />
                <VscArrowRight className="arrow" />
            </div>
        </FormWrapper>
    )
}

