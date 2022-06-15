import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/eslomasestupidoqueehoido.mp3'
    conn.sendFile(m.chat, vn, 'qeslomasestupidoqueehoido.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /es lo mas estupido que eh oido|Es lo mas estupido que eh oido|es lo mas estupido/
handler.command = new RegExp
export default handler 
