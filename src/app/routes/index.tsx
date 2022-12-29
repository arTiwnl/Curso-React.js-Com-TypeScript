
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Routes = () => {

    return(
        <BrowserRouter>
            <Switch>

                <Route path="/" component={() => <h1>Olá</h1>} />
                    
            </Switch>
        </BrowserRouter>
    );

}