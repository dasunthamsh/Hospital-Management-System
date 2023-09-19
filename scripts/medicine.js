
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


const loadMedicine=()=>{

    $("#tblItemmedicine").empty();

    const firestore = firebase.firestore();
    firestore.collection('medicines').get().then((result)=>{
        result.forEach((recodes)=>{
            const data =recodes.data();
            const row = `<tr><td>${recodes.id}</td><td>${data.description}</td><td>${data.qyt}</td><td>${data.price}</td><td>

            <button class="bg-danger" onclick="deleteMedicineData('${recodes.id}')">Delete</button>
            <button class="bg-success" onclick="updatMedicineeData('${recodes.id}')">Update</button>
</td></tr>`

            $("#tblItemmedicine").append(row);
        });
    })

}


// if click update button in table fill the input value in form

medicineCode = undefined;
const updatMedicineeData=(code)=>{
    medicineCode=code;
    const firestore = firebase.firestore();
    firestore.collection('medicines').doc(medicineCode).get().then((response)=>{
        if(response.exists){
            const data = response.data();
            $("#description").val(data.description);
            $("#qyt").val(data.qyt);
            $("#price").val(data.price);
        }
    })

}

// if click update button update firebase doctor details

const updatMedicineeRecode=()=>{

    if(medicineCode){
        const firestore = firebase.firestore();
        firestore.collection('doctors').doc(medicineCode).update({

            name: $("#description").val(data.name),
            number:$("#qyt").val(data.number),
            address:$("#price").val(data.address)
        }).then(()=>{
            medicineCode=undefined;
            loadDoctor();
        })
    }
}


// delete doctor details

const deleteMedicineData=(code)=>{

    if(confirm('are you sure ?')){
        const firestore = firebase.firestore();
        firestore.collection('medicines').doc(code).delete().then(()=>{
            toastr.success('Deleted')
            medicineCode=undefined;
            loadMedicine();
        })

    }

}