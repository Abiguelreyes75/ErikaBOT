import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/algoandamal.mp3'
    conn.sendFile(m.chat, vn, 'algoandamal.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /algo anda mal|algoandamal|algo no anda bien/
handler.command = new RegExp
export default handler
