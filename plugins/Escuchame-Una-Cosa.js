import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/Escuchame una cosa pedazo de hijo.mp3'
    conn.sendFile(m.chat, vn, 'Escuchame una cosa pedazo de hijo.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /Escuchame una cosa pedazo de hijo|escuchame una cosa|pedazo de hijo/
handler.command = new RegExp
export default handler
