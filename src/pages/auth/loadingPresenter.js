import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import * as firebase from "firebase";
import {inject, observer} from "mobx-react";

@withRouter
@inject('auth')
@observer
class LoadingPresenter extends Component {
    constructor(props) {
        super(props);
        this.provider = props.match.params.provider
        this.isInitiatingRedirect = props.location.state && props.location.state.initiateRedirect
    }
    async componentDidMount() {
        if(!this.isInitiatingRedirect){
            await this.props.auth.redirectAuth()
        }
    }

    render() {
        const {auth} = this.props
        return (
            <div>
                {this.isInitiatingRedirect ? (
                    <h1>인증을 시작합니다</h1>
                ): (
                    <>
                        {auth.isLogined ? (
                            <div>
                                <h1>인증이 완료되었습니다</h1>
                                <button onClick={()=>this.props.history.push(`/u/${auth.user.email}`)}>홈으로 가기</button>
                            </div>
                        ): (
                            <div>
                                <h1>인증을 완료하고 있습니다</h1>
                            </div>
                        )}
                    </>
                )}
            </div>
        );
    }
}

export default LoadingPresenter;
