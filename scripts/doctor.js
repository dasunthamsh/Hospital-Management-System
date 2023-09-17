
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
            const row = `<tr><td>${recodes.id}</td><td>${data.name}</td><td>${data.number}</td><td>${data.address}</td><td>

            <button class="bg-danger" onclick="deleteData('${recodes.id}')">Delete</button>
            <button class="bg-success" onclick="updateData('${recodes.id}')">Update</button>
</td></tr>`

            $("#tblItemDoctor").append(row);
        });
    })

}



// if click update button in table fill the input value in form

doctorId = undefined;
const updateData=(id)=>{
    doctorId=id;
    const firestore = firebase.firestore();
    firestore.collection('doctors').doc(doctorId).get().then((response)=>{
        if(response.exists){
            const data = response.data();
                $("#doctorName").val(data.name);
                $("#doctorNumber").val(data.number);
                $("#doctorAddress").val(data.address);
        }
    })

}


// if click update button update firebase doctor details

const updateRecode=()=>{

    if(doctorId){
        const firestore = firebase.firestore();
        firestore.collection('doctors').doc(doctorId).update({

            name: $("#doctorName").val(data.name),
        number:$("#doctorNumber").val(data.number),
        address:$("#doctorAddress").val(data.address)
        }).then(()=>{
            doctorId=undefined;
            loadDoctor();
        })
    }
}


// delete doctor details

const deleteData=()=>{

}