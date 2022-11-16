import {sendForm} from "./utils.js"

const formTicket= document.querySelector("form")
const ticketEl= document.getElementById("ticket")

formTicket.addEventListener("submit", function(e){
    e.preventDefault()
    sendForm()
})


ticketEl.addEventListener("click", function(e){
    window.print()
})









