import React, {Component} from 'react';
import * as Provider from './providers'
import {withRouter} from 'react-router-dom'

@withRouter
class AuthPresenter extends Component {
    constructor(props) {
        super(props);
        this.providers = {
            Github: new Provider.Github(props)
        }
    }

    render() {
        return (
            <div>
                ぎつめ auth presenter
                <button onClick={this.providers.Github.authenticate}>Github로 로그인</button>
            </div>
        );
    }
}

export default AuthPresenter;
