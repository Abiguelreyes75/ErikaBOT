import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/ahoritavemosquepedo.mp3'
    conn.sendFile(m.chat, vn, 'ahoritavemosquepedo.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /ahorita vemos que pedo|ahorita vemos que pedo con eso|ahorita vemos que paso con eso /
handler.command = new RegExp
export default handler
