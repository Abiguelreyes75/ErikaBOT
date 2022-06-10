const axios = require('axios')
 let handler = async(m, { conn }) => {
let les = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
            conn.sendFile(m.chat, `${les.data.url}`, '', `${les.data.title}          
🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈`, m) 
  }
handler.help = ['imagenrandom']
handler.tags = ['images']
handler.command = /^(imagenlesbianas|lesbianassexo|lesbisxd)$/i
module.exports = handler
