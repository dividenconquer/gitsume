class Provider {
    providerName = null

    constructor({history}, providerName){
        this.providerName = providerName
        this.history = history
    }

    moveToProviderWaitingPage(){
        if(this.providerName){
            this.history.push(`/auth/${this.providerName}`, {
                initiateRedirect: true
            })
        }
    }
}

export default Provider
