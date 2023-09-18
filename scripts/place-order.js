
//load patient ids to combo box when load the page
const loadAllPatientIds=()=>{

$("#patient-id").empty()

    const firestore = firebase.firestore();
firestore.collection('patients').get().then((recodes =>{
    recodes.forEach((resault)=>{
        const option = $('<option></option>').val(resault.id).text(resault.id);
        $("#patient-id").append(option);
    })
}))


}