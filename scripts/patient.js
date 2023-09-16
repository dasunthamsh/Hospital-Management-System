saveCustomer=()=>{
    const tempCustomer={
        id: $("#patientId").val(),
        name: $("#patientName").val(),
        number: $("#patientNumber").val(),
        address: $("#patientAddress").val()
    };

    console.log(tempCustomer);

    const database = firebase.firestore();
    database.collection('customers').add(tempCustomer).then((response)=>{
        console.log(response);

    }).catch((error)=>{
        console.log(error);
    })
}

