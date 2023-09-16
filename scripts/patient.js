saveCustomer=()=>{
    const tempCustomer={
        id: $("#patientId").val(),
        name: $("#patientName").val(),
        number: $("#patientNumber").val(),
        address: $("#patientAddress").val()
    };

    console.log(tempCustomer);

    const database = firebase.firestore();
    database.collection('patients').add(tempCustomer).then((response)=>{
        console.log(response);

    }).catch((error)=>{
        console.log(error);
    })
}


const loadPatient=()=>{

    const firestore = firebase.firestore();
    firestore.collection('patients').get().then((result)=>{
        result.forEach((recodes)=>{
            const data = recodes.data();
            const row = `<tr><td>${recodes.id}</td><td>${data.name}</td><td>${data.number}</td><td>${data.address}</td></tr>`

            $("#tblItem").append(row);
        });
    });
}

