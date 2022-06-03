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
  "https://external-preview.redd.it/-ed6SLyC0Y5S01do2JqJm2CqyavVBn7JOv6-6M85jsE.png?auto=webp&s=7da27edf3ecad9f86db4fb4c03020f63044dd755U",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQw-VhgG0yHAQrWhcxoKUplifLJRoKJ9NFtFcBUPZtTCZWMWDOfxOjEIbmKkLsxrTwHM&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wFlconD8OP6BUU1o3nb2zR9EfSy3l2DkEg&usqp=CAU",
  ]
