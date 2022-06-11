import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/casimecagodelsusto.mp3'
    conn.sendFile(m.chat, vn, 'casimecagodelsusto.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /casi me cago del susto|casimecagodelsusto|nomames casi me cago del susto/
handler.command = new RegExp
export default handler
