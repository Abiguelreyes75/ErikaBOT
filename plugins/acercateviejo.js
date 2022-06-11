import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/acercateviejo.mp3'
    conn.sendFile(m.chat, vn, 'acercateviejo.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /acercate viejo|acercateviejo|vamos hacercate viejo/
handler.command = new RegExp
export default handler
