
// save patient to firestore

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

// get patient for firestore
const loadPatient=()=>{

    $("#tblItem").empty();

    const firestore = firebase.firestore();
    firestore.collection('patients').get().then((result)=>{
        result.forEach((recodes)=>{
            const data = recodes.data();
            const row = `<tr><td>${recodes.id}</td><td>${data.name}</td><td>${data.number}</td><td>${data.address}</td><td>

            <button class="bg-danger" onclick="deletePatient('${recodes.id}')">Delete</button>
            <button class="bg-success" onclick="updatePatient('${recodes.id}')">Update</button>
</td></tr>`


            $("#tblItem").append(row);
        });
    });
}

// if click update button in table fill the input value in form

patientId = undefined;
const updatePatient=(id)=>{
    patientId=id;
    const firestore = firebase.firestore();
    firestore.collection('patients').doc(patientId).get().then((response)=>{
        if(response.exists){
            const data = response.data();
            $("#patient-name").val(data.name);
            $("#patient-number").val(data.number);
            $("#patient-address ").val(data.address);
        }
    })

}
