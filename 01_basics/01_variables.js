const accountId = 14362
let accountEmail = "hitesh@google.com"
var accountPassword = "12334"
accountCity = "Jaipur"
let accountState;

// accountId = 2313   -> not allowed
 
accountEmail = "kk@kk.com"
accountPassword = "45678"
accountCity = "delhi"

console.log(accountId);  

/*
prefer not to use var because of issue in block scope and functional scope. 
var -> Global while le -> local
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
// console.table => A way to print many things together