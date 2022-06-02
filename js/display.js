function displayUser() {

    welcomeUser = localStorage.getItem("Username");
    UserNameView.innerHTML = `Welcome ${welcomeUser}`;
}
displayUser();