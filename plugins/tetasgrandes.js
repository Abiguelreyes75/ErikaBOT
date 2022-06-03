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
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssN3kM_GE9BqOyqVh7vYxyonsyZZw9Mg7ag&usqp=CAU",
  "https://thumb-v2.xhcdn.com/a/vamJ40FMwvU0FE4UfctZAw/018/883/602/320x240.10.jpg",
  "https://cdn77-pic.xnxx-cdn.com/videos/thumbslll/b6/03/2c/b6032c8938086eb4b43a1aaa7f7b4f0f/b6032c8938086eb4b43a1aaa7f7b4f0f.3.jpg",
]
