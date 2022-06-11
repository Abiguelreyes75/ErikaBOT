import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/elmamut.mp3'
    conn.sendFile(m.chat, vn, 'elmamut.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /elmamut|un mamut|el mamut chiquitico|el mamut/
handler.command = new RegExp
export default handler 
