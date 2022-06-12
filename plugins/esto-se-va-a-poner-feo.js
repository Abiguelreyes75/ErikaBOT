import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/estosevaaponerfeo.mp3'
    conn.sendFile(m.chat, vn, 'estosevaaponerfeo.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /esto se va a poner feo|Esto se va a poner feo|se va a poner feo/
handler.command = new RegExp
export default handler 
