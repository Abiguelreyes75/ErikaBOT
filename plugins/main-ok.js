import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "sticker by", author: "Elyas" })
throw stiker.toString()
}
handler.tags = ['ok']
handler.command = /^ok$/i
export default handler
