import  { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEntrar = () =>{
        console.log(email, password);

    }

    return (
        <div>
            <form>

                <label>
                    <span >Email</span>
                    <input value={email} onChange={ e => setEmail(e.target.value)} placeholder=" Seu melhor email" />
                </label>
                <label>
                    <span>Senha</span>
                    <input value={password} onChange={ e => setPassword(e.target.value)} type="password" />
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        
        </div>

    );
}