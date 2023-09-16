
const dashBoardPage=()=>{
    console.log("running!")

    const email = $("#email").val();
    const password = $("#password").val();

    firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then((resp)=>{
            console.log(resp);
            console.log(resp.user);
            window.location.href="dashboard.html";
        })
        .catch((error)=>{
            console.log(error);
        });

}

const createAnAccount=()=>{
    window.location.href="register.html";
}