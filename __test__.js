/*			   						*/
/*			 Decryptfy.js  			*/
/*			   						*/
/*  	    15 - 08 - 2020 			*/
/*			   						*/
/*				 by 	            */
/*			   						*/
/*	https://github.com/sudoGabriel  */
/*			   						*/
/* -------------------------------- */

const decryptfy = require('./src/decryptfy.js')

var hash = "b5c0b187fe309af0f4d35982fd961d7e" // love

if(decryptfy.md5(hash).code == "ok") {

	console.log(`[+] Found: ${decryptfy.md5(hash).msg}`)

} else {

	console.log(`[!] We can't be decrypt your hash`)

}

