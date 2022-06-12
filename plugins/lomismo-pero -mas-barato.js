import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/lomismoperomasbarato.mp3'
    conn.sendFile(m.chat, vn, 'lomismoperomasbarato.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /lo mismo pero mas barato|Lo mismo pero mas barato|lo mismo pero barato/
handler.command = new RegExp
export default handler
