let handler = async (m, { conn, text }) => HOLA BUENAS CHAVALES{
    
    conn.sendFile(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png'})
    }
    
    handler.customPrefix = /^(ok)$/i
    handler.command = new RegExp
    
    export default handler
