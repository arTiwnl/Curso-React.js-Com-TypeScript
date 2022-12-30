import { useNavigate } from "react-router-dom";

//Forma de navegar entre rotas utilizando função

export const Login = () => {
        const history = useNavigate();

        const handleClick = () => {
            history('/pagina-inicial')


        }

    return (
        <div>
            Login

            <button onClick={handleClick}>Página Inicial</button>
        </div>

    );
}