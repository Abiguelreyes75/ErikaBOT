import axios from "axios"
let handler = async (m, {command, conn}) => {
let res = await axios(pickRandom(meme))
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
}
handler.help = ['ok']
handler.tags = ['random']
handler.command = /^(ok)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const meme = [
"https://telegra.ph/file/f61a7c96f3f86b6c5214f.png"
]
