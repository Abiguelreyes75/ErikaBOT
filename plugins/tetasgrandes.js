import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw'
let url = tetasgrandes[Math.floor(Math.random() * tetasgrandes.length)]
conn.sendButton(m.chat, `🥵 Tetas Grandes 🥵`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
}
handler.help = ['tetasgrandes']
handler.tags = ['internet']
handler.command = /^(tetasgrandes)$/i
export default handler

global.tetasgrandes = [
  "https://www.copasmenstruales.com/blog/wp-content/uploads/Mal-olor-vaginal-768x512-1.jpg",
  "https://image.shutterstock.com/image-vector/daisy-flower-cute-bee-cartoon-260nw-1891391209.jpg",
  "https://i.pinimg.com/236x/2c/04/98/2c0498de02a52723c392ea08a149791d.jpg",
]
