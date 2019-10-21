import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {withRouter} from "react-router-dom";

@withRouter
@inject('auth')
@observer
class Presenter extends Component {
    render() {
        return (
            <div>
                {this.props.auth.isLogined ? (
                    <div>
                        <button onClick={this.props.auth.logout}>로그아웃</button>
                        <h2>{this.props.auth.user.displayName}</h2>
                    </div>
                ): (
                    <button onClick={() => this.props.history.push('/auth')}>로그인</button>
                )}
            </div>
        );
    }
}

export default Presenter;
