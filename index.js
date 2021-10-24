var customerName = "bob"
var bestCustomer = "not bob"
const leastFavoriteCustomer = "Assignment to constant variable."

function upperCaseCustomerName(){
    return customerName.toUpperCase();
}

function setBestCustomer(){
    return bestCustomer;
}

function overwriteBestCustomer(){
    var bestCustomer = "maybe bob"
    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer;
}