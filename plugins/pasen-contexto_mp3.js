let util = from ('util')
let path = from ('path')

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/contexto.mp3'
conn.sendFile(m.chat, vn, 'contexto.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Contexto|CONTEXTO|contexto|Pasen contexto|PASEN CONTEXTO|pasen contexto|Y el contexto|Y EL CONTEXTO|y el contexto/
handler.command = new RegExp
export default handler 
