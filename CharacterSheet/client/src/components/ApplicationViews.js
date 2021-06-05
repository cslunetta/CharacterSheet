import { Route, Switch } from "react-router-dom";

export default function ApplicationViews() {
    return (
        <main>
            <Switch>
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
                    {/* <CharacterSheet /> */}
                </Route>


            </Switch>
        </main>
    )
}