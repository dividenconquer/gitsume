import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as Page from './pages'
import {Provider} from "mobx-react";
import AuthStore from "./stores/AuthStore";

function App() {
    return (
        <Provider auth={new AuthStore()}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/auth'>
                            <Page.AuthPresenter/>
                        </Route>
                        <Route exact path='/auth/:provider'>
                            <Page.AuthLoadingPresenter/>
                        </Route>
                        <Route exact path='/u/:username'>
                            유저 대표 페이지
                        </Route>
                        <Route exact path='/'>
                            <Page.MainPresenter/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
