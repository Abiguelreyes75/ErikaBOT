let handler = async (m, { conn, command, text }) => {
conn.reply(m.chat, `
*❤️❤️ 𝘮𝘦𝘥𝘪𝘥𝘰𝘳 𝘥𝘦 𝘢𝘮𝘰𝘳 ❤️❤️*
*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle que sea tu  novio/a ¡para que sean felices! uwu *
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
