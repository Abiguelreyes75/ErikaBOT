import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_🥵 tetasgrandes 🥵_`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
}
handler.help = ['tetasgrandes']
handler.tags = ['internet']
handler.command = /^(tetasgrandes)$/i
export default handler

global.pack = [
  "https://p-a-c-k-s.com/wp-content/uploads/2021/02/P-A-C-K-S.com_.jpeg",
]
