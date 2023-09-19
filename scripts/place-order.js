let orders=[];

//load patient ids to combo box when load the page
const loadAllPatientIds=()=>{

$("#patient-id").empty()

    const firestore = firebase.firestore();
firestore.collection('patients').get().then((recodes =>{
    recodes.forEach((resault)=>{
        const option = $('<option></option>').val(resault.id).text(resault.id);
        $("#patient-id").append(option);
    });
}));

}


// when click patient id load the all patient data to inputs

$("#patient-id").on("change",function (){

const patientid = $(this).val()

    const firestore = firebase.firestore();
firestore.collection('patients').doc(patientid).get().then((response)=>{
    if (response.exists){
        const data = response.data();


        $("#patient-name").val(data.name)
        $("#patient-number").val(data.number)
        $("#patient-address").val(data.address)
    }
});
});



//load medicine ids to combo box when load the page

const loadAllMedicineCodes=()=>{

    const firestore = firebase.firestore();
    firestore.collection('medicines').get().then((records =>{
        records.forEach((resault)=>{
            const option = $("<option></option>").val(resault.id).text(resault.id);
            $("#medicine-id").append(option);

        })
    }))

}



// when click medicine ids load the all patient data to inputs


$("#medicine-id").on("change",function (){
    const medicineId = $(this).val();

    const firestore = firebase.firestore();
    firestore.collection('medicines').doc(medicineId).get().then((response)=> {
    if (response.exists){
        const  data = response.data();


        $("#description").val(data.description);
        $("#qyt").val(data.qyt);
        $("#price").val(data.price);
    }
    });

})


const addToList=()=>{

    const unitPrice = Number.parseInt($('#price').val());
    const qyt = Number.parseInt($('#qyt').val());
    const tottalCost = unitPrice*qyt;

    const carObject = {
        "code":$("#medicine-id").val(),
        "description":$("#description").val(),
        "unitprice":unitPrice,
        "qyt":qyt,
        "totalcost":tottalCost
    }

    orders.push(carObject);

    $('#tblOrder').empty();

    orders.forEach(data=>{
        const row =`
       
       <tr>
            <td>${data.code}</td>
            <td>${data.description}</td>
            <td>${data.unitprice}</td>
            <td>${data.qyt}</td>
            <td>${data.totalcost}</td>
</tr> 
       `;
        $('#tblOrder').append(row);


    });

}