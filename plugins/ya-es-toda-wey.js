import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if(!db.data.chats[m.chat].audios && m.isGroup) throw 0
    let vn = './media/yaestodawey.mp3'
    conn.sendFile(m.chat, vn, 'yaestodawey.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    })
}
handler.customPrefix = /ya es toda wey|Ya es toda wey|ya es toda/
handler.command = new RegExp
export default handler 
