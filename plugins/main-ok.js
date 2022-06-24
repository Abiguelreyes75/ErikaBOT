let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), global.packname, global.author)
if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
throw stiker.toString()
}
handler.tags = ['ok']
handler.command = /^ok$/i
export default handler
