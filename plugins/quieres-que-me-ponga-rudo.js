import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/quieresquemepongarudo.mp3'
    conn.sendFile(m.chat, vn, 'quieresquemepongarudo.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /quieres que me ponga rudo|Quieres que me ponga rudo/
handler.command = new RegExp
export default handler 
