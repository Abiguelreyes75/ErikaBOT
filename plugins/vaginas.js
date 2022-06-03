import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `🥵 VAGINA 🥵`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
}
handler.help = ['vagina']
handler.tags = ['internet']
handler.command = /^(vagina)$/i
export default handler

global.pack = [
  "https://i.pinimg.com/736x/12/87/1b/12871b6e8385373148359ec16391f60f.jpg",
  "https://data.pixiz.com/output/user/frame/preview/400x400/9/0/4/3/3513409_00fe2.jpg",
  "https://i.pinimg.com/736x/47/cd/a8/47cda8eca5f5f013d14ce7dd6b408bfd.jpg",
]
