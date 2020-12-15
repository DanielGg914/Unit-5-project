
var objPeople = [
    {
        username: "odisha",
        password: "westmec1506"
    }
   
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password){
            window.open('hiring.html')
            return
        } 
    }
    alert("Incorrect Username or Password")
}