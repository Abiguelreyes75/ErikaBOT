import util = from ('util'
import path = from ('path')

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/entrada-epica-al-chat.mp3'
conn.sendFile(m.chat, vn, 'entrada-epica-al-chat.mp3', null, m, true, {
type: 'audioMessage',
ptt: true 
})
}
handler.customPrefix = /ENTRADA|entrada|Entrada|Entra|ENTRA|Entra|Ingresa|ingresa|INGRESA|ingresar|INGRESAR|Ingresar/i 
handler.command = new RegExp
module.exports = handler
