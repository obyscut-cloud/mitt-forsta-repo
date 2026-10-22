let age =16
let hasTicket = true
let withAdult = true

if(age >= 15  && (hasTicket == true &&withAdult ===true)) {
    console.log("Välkommen in  i Bio")
} else {
    console.log("gå köp ticket din snåle fan")
}



const isLoggedIn=true;
const userRole="admin";

if (isLoggedIn===) {
    if (userRole==="admin") {
    console.log ("Välkommen till Adminpanel!")
    } else {
        console.log ("Välkommen vanlig användare!")
    }
} else {
    console.log ("Du måste logga in först !")
}
//Swisth
const traficLight="gul"
switch (traficLight) {
    case "grön" :
        console.log ("kör")
        break;
    case "gul":
        console.log ("stanna !")
        break;
        default:
            console.log("okänd signal")
}