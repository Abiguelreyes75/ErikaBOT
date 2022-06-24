let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    
    conn.sendFile(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "sticker by", author: "Elyas" })
    }
    
    handler.customPrefix = /^(ok)$/i
    handler.command = new RegExp
    
    export default handler
