import { Customer } from "./customer.js"

const formTicket= document.querySelector("form")
const mainEl= document.querySelector("main")
const ticketEl= document.getElementById("ticket")
let customersTab= []
const customerStorage= JSON.parse(localStorage.getItem("customerTab"))

if(customerStorage){
    customersTab= customerStorage
}


const sendForm= () =>{
    const formTicketData= new FormData(formTicket)
    const name= formTicketData.get("lastName")
    const firstNames= formTicketData.get("firstName")
    const places= formTicketData.get("nbPlaces")
    const numMobile= formTicketData.get("num-mobile")
    customersTab.push(new Customer(firstNames, name, places))
    const totalPrice= customersTab.reduce((total, currentValue) => total + currentValue.totalPrice, 0)
    localStorage.setItem("customerTab", JSON.stringify(customersTab))
    console.log(customersTab)
    console.log(`montant total tickets vendus: ${totalPrice} francs`)
    mainEl.style.display= "block"
    document.querySelector("form").style.display= "none"
    ticketEl.innerHTML= `
        <div id="ticket-infos">
            <img src="images/logo-ticket.png" id="logo"/>
            ${places > 1 ? 
                `
                <div id="cercle-ticket">
                    <h1 class=" elmt-cercle nb-places">${places}</h1>
                    <p class="elmt-cercle text-places">Places</p>
                </div>
                `
                : ""
            }

            <p class="ticket-welcome">Bienvenue à la soirée</p>
            <p class="ticket-nom">${firstNames} ${name}</p>
        </div>

        <div id="ticket-qrCode"></div>
        <p id="ticket-consigne">Présentez votre ticket à l'entrée</p>
    `
    const qrc = new QRCode(document.getElementById("ticket-qrCode"), {
        text: `${firstNames} ${name} ${numMobile}`,
        width: 300,
        height: 300,
        correctLevel: QRCode.CorrectLevel.L
    });
}







export {sendForm}