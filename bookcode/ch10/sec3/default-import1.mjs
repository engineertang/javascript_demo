// node default-import1.mjs

'use strict'

console.log('// Default imports')

// import Class
import CaesarCipher from './modules/caesar.mjs'

const cipher = new CaesarCipher(3)
const message = 'Meet me at the toga party'
const encrypted = cipher.encrypt(message)
const decrypted = cipher.decrypt(encrypted)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party
