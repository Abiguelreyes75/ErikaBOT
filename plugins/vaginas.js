import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_🥵 vaginas 🥵_`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
}
handler.help = ['vaginas']
handler.tags = ['internet']
handler.command = /^(vaginas)$/i
export default handler

global.pack = [
 "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg",
  ]
