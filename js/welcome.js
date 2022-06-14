firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("recap.html")
    }else{
        document.getElementById("user").innerHTML = "Thanks For Visiting"

    }
})

function logout(){
    firebase.auth().signOut()
}
