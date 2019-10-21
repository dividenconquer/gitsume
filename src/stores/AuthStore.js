import {action, autorun, computed, observable} from 'mobx'
import * as firebase from "firebase";
import _ from 'lodash'

class AuthStore{
    constructor(){
        const user = firebase.auth().currentUser
        if(user){
            this.userData = user
        }else{
            this.userData = false
        }
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.userData = user
            } else {
                this.userData = false
            }
        });
    }
    @observable userData = null
    @observable githubAccessToken = null

    logUser = autorun(() => {
        console.group("Auth 상태 변화")
        switch (this.userData) {
            case null:
                console.info("로그인 상태 미정")
                break;
            case false:
                console.info("미 로그인 상태")
                break;
            default:
                console.info("로그인 상태")
                console.groupCollapsed("유저 정보")
                console.info(this.user)
                console.groupEnd()
                break;
        }
        console.groupEnd()
    })

    logGithubAccessToken = autorun(()=>{
        console.group("깃허브 액세스 토큰 변화")
        console.info(this.githubAccessToken)
        console.groupEnd()
    })

    @computed
    get isLogined(){
        return !!this.userData
    }
    @computed
    get user(){
        const raw = _.pick(this.userData, ['refreshToken', 'uid', 'displayName', 'photoURL', 'email', 'providerData[0].uid']);
        // const githubUid = raw.providerData[0].uid
        delete raw.providerData
        return {
            ...raw,
            // githubUid: githubUid
        }
    }

    @action
    async redirectAuth(){
        const result = await firebase.auth().getRedirectResult()
        if (result.credential) {
            this.githubAccessToken = result.credential.accessToken
        }
    }
    @action
    async logout(){
        await firebase.auth().signOut()
        this.userData = false
    }
}

export default AuthStore
