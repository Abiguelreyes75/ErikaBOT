import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.xteam.xyz/randomimage/orgy?APIKEY=29d4b59a4aa687ca")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*orgy*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['orgy']
handler.tags = ['internet']
handler.command = /^(orgy)$/i
export default handler
