saveDoctor=()=>{

    const tempDoctor={
        id:$("#doctorId").val(),
        name:$("#doctorName").val(),
        number:$("#doctorNumber").val(),
        address:$("#doctorAddress").val()
    };

    console.log(tempDoctor);

    const database = firebase.firestore();
    database.collection('doctors ').add(tempDoctor).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });
}