
class Customer {
    constructor(firstName, name, nbPlaces){
        this.firstName= firstName;
        this.name= name;
        this.nbPlaces= nbPlaces;
        this.totalPrice= 5000*this.nbPlaces;
    }
}



export {Customer}