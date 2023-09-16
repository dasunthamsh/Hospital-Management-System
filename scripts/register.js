const loginPage=()=>{

    window.location.href="index.html";


}


const register=()=>{

    const email = $("#email").val();
    const password = $("#password").val();

    console.log(email,password);

   // if(!email && !password){

    firebase
        .auth()
        .createUserWithEmailAndPassword(email,password).then((cred)=>{
            console.log(cred);
            console.log(cred.user);
        })
            .catch((error)=>{
                console.log(error);
            })
    //}
}