import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/estonoerapartedeltrato.mp3'
    conn.sendFile(m.chat, vn, 'estonoerapartedeltrato.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /esto no era parte del trato|no era del trato|no fue parte del trato/
handler.command = new RegExp
export default handler
