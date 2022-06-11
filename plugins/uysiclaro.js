import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/uysiclaro.mp3'
    conn.sendFile(m.chat, vn, 'uysiclaro.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /uysiclaro|Uy si claro|uy si como no/
handler.command = new RegExp
export default handler 
