import { Route, Switch } from "react-router-dom";
import { CharacterSheet } from "./characterSheet/CharacterSheet";
import Home from "./Home";
import Inventory from "./inventory/Inventory";

export default function ApplicationViews() {
    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                {/* Login screen and register screens */}
                <Route path="/login">
                    {/* <Login /> */}
                </Route>
                
                <Route path="/register">
                    {/* <Register /> */}
                </Route>

                {/* Character Select list */}
                <Route path="/characterselect">
                    {/* <CharacterSelectList /> */}
                </Route>
                
                {/* New Character form */}
                <Route path="/characterbuilder">
                    {/* <CharacterBuilder /> */}
                </Route>

                {/* Character view */}
                <Route path="/charactersheet">
                    <CharacterSheet />
                </Route>

                {/* Inventory for a Character */}
                <Route path="/inventory">
                    <Inventory />
                </Route>


            </Switch>
        </main>
    )
}