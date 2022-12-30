import { Link } from 'react-router-dom'; 

//Formas de navegar entre rotas utilizando Link

export const Dashboard = () => {
    return (
        <div>
            <p>Dashboard</p>

            <Link to={"/entrar"}>Login</Link>
        </div>
    );

}

