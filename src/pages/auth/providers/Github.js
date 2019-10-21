import * as firebase from 'firebase'
import Provider from './Provider'
import bind from "bind-decorator";

class Github extends Provider{
    constructor(props) {
        super(props, 'github');
    }

    @bind
    async authenticate(){
        const provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('user');
        provider.addScope('public_repo');
        this.moveToProviderWaitingPage()
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        await firebase.auth().signInWithRedirect(provider);
    }
}

export default Github
