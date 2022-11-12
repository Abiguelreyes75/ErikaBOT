
import util from 'util'
import path from 'path'
let handler = m => m
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/a.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/
export default handler
