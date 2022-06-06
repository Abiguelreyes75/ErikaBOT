import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/entrada-epica-al-chat.mp3'
conn.sendFile(m.chat, vn, 'entrada-epica-al-chat.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /entradaepica|entrada al chat|entrada epica al chat/
handler.command = new RegExp
export default handler
