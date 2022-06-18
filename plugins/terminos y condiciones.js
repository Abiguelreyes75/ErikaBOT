import fs from 'fs'
function handler(m, { conn }) {
let text = `
*𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤 | 𝘾𝙤𝙣𝙩𝙖𝙘𝙩* 
*Wa.me/16479546631 (BOT)*
*https://www.instagram.com/abiguelreyes75*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'Erika-BOT | Erika-BOT',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫𝐚 | 𝐂𝐫𝐞𝐚𝐭𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/16479546631`}}})
  
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(terminos)$/i
export default handler
