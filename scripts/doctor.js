
// save doctor to firestore

saveDoctor=()=>{

    const tempDoctor={
        id:$("#doctorId").val(),
        name:$("#doctorName").val(),
        number:$("#doctorNumber").val(),
        address:$("#doctorAddress").val()
    };

    console.log(tempDoctor);

    const database = firebase.firestore();
    database.collection('doctors').add(tempDoctor).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });
}

// get doctor for firestore


const loadDoctor=()=>{

    const firestore = firebase.firestore();
    firestore.collection('doctors').get().then((result)=>{
        result.forEach((recodes)=>{
            const data =recodes.data();
            const row = `<tr><td>${recodes.id}</td><td>${data.name}</td><td>${data.number}</td><td>${data.address}</td></tr>`

            $("#tblItemDoctor").append(row);
        });
    })

}