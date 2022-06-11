import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/quepaso.mp3'
    conn.sendFile(m.chat, vn, 'quepaso.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /haber haber que paso|que paso|aver que paso/
handler.command = new RegExp
export default handler

