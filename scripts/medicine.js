
// save doctors values to firestore

saveMedicine=()=>{

    const tempMedicine={
        code:$("#coed").val(),
        description:$("#description").val(),
        qyt:$("#qyt").val(),
        price:$("#price").val()
    };

    console.log(tempMedicine);

    const database = firebase.firestore();
    database.collection('medicines').add(tempMedicine).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });

    loadMedicine();
}


// get doctors values from firestore

