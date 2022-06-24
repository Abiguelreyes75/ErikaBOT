let handler = async (m, { conn, text, usedPrefix, command }) => {

    if conn.sendImageAsSticker(m.chat, stiker, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', '', m)
   throw stiker.toString()
    }
    
    handler.customPrefix = /^(ok)$/i
    handler.command = new RegExp
    
    module.exports = handler
