let handler = async (m, { conn, usedPrefix, text }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "sticker by", author: "Elyas" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

export default handler
