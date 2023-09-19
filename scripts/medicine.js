
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
            const row = `<tr><td>${recodes.code}</td><td>${data.description}</td><td>${data.qyt}</td><td>${data.price}</td><td>

            <button class="bg-danger" onclick="deleteData('${recodes.code}')">Delete</button>
            <button class="bg-success" onclick="updateData('${recodes.code}')">Update</button>
</td></tr>`

            $("#tblItemmedicine").append(row);
        });
    })

}
