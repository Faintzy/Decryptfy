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

const md5 = require("md5")
const sha1 = require("sha1")
const fs = require("fs")
const moment = require("moment")

class Decryptfy {

	static md5(hash, wlist = "default") {

		const wordlist = wlist != "default" ? wlist : "./wordlists/first.txt"

		var data

		try {

			data = fs.readFileSync(wordlist, { encoding: 'utf8' })

		} catch(e) {

			return {
				code: "error",
				msg: "[-] Error while opening your wordlist"
			}

		}

		var arr = data.split("\n")
		var len = arr.length

		for(let i = 0; i < len; i++) {

			if(md5(arr[i]) == hash) {

				return {
					code: "ok",
					msg: arr[i]
				}

			}

		}

		return {
			code: "error",
			msg: "[-] Sorry, we can't be decrypt your hash"
		}

	}

	static sha1(hash, wlist = "default") {

		const wordlist = wlist != "default" ? wlist : "./wordlists/first.txt"

		var data

		try {

			data = fs.readFileSync(wordlist, { encoding: 'utf8' })

		} catch(e) {

			return {
				code: "error",
				msg: "[-] Error while opening your wordlist"
			}

		}

		var arr = data.split("\n")
		var len = arr.length

		for(let i = 0; i < len; i++) {

			if(sha1(arr[i]).toUpperCase() == hash) {

				return {
					code: "ok",
					msg: arr[i]
				}

				break
			}

		}

		return {
			code: "error",
			msg: "[-] Sorry, we can't be decrypt your hash"
		}

	}

}

module.exports = Decryptfy 