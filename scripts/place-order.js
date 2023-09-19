
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

