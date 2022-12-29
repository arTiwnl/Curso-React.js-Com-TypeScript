/* eslint-disable react/jsx-no-comment-textnodes */
import { BrowserRouter, Route, Routes as Switch, Navigate} from "react-router-dom";
import { Dashboard } from "../pages";

export const Routes = () => {

    return(
        <BrowserRouter>
            <Switch>

                <Route  path="/pagina-inicial" element={<Dashboard />} />
            
        //Redireciona caso não encontre a página
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />  
            </Switch>
        </BrowserRouter>
    );

}