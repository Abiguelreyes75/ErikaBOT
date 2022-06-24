let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (stiker) return conn.sendFile(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "sticker by", author: "Elyas" })
   throw stiker.toString()
    }
    
    handler.customPrefix = /^(ok)$/i
    handler.command = new RegExp
    
    module.exports = handler
