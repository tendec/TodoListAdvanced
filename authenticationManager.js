const authenticationManager = {
    checkAuthentication: function () {
        return dataManager.state.currentUser != null;
    }
}