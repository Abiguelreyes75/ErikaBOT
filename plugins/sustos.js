import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/sustos.mp3'
conn.sendFile(m.chat, vn, 'sustos.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(sustos|sustos que dan gusto|soliban|sutos gustos🤖)$/i
handler.fail = null
handler.exp = 100
export default handler
