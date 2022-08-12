
/*
- Obten mas efectos en https://violetics.pw/api/ephoto360
- Usa la apikey "beta"
*/
let handler = async (m, { conn, args, command }) => { 
let response = args.join(' ').split('|')
//if (!args[0]) throw '*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾*' 
if (!args) throw `${mg}𝙐𝙎𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎\n💫 *${usedPrefix + command} efecto texto*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n💫 *${usedPrefix + command} American-flag-3D GataBot*\n\n𝙀𝙉 𝘾𝘼𝙎𝙊 𝘿𝙀 𝙌𝙐𝙀 𝘿𝙄𝙂𝘼 𝙌𝙐𝙀 𝙁𝘼𝙇𝙏𝘼 𝙏𝙀𝙓𝙏𝙊 𝙐𝙎𝘼𝙍 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼\n𝙄𝙉 𝘾𝘼𝙎𝙀 𝙄𝙏 𝙎𝘼𝙔𝙎 𝙏𝙀𝙓𝙏 𝙄𝙎 𝙈𝙄𝙎𝙎𝙄𝙉𝙂 𝙐𝙎𝙀 𝙇𝙄𝙆𝙀 𝙏𝙃𝙄𝙎\n💫 *${usedPrefix + command} efecto texto1|texto2*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n💫 *${usedPrefix + command} Wolf-Logo-Galaxy GataBot|GataDios*\n\n*✨ 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎*\n\n🤍 ${usedPrefix + command} ` + effects.map(v => v.title).join(`\n💜 ${usedPrefix + command} `)
try {     
if (command == '1917') {
conn.reply(m.chat, '*[❗] 𝙴𝙻𝙰𝙱𝙾𝚁𝙰𝙽𝙳𝙾 𝚂𝚄 𝙳𝙸𝚂𝙴𝙽̃𝙾, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾...*', m)
  conn.reply(m.chat, '*[❗] SI SU LOGO NO ES ENVIADO CORRECTAMENTE UTILICE MENOS PALABRAS.*', m)
let res = `https://violetics.pw/api/ephoto360/1917?apikey=${Key360}&text=${response[0]}`     //ya esta 
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
if (command == 'cute') {
conn.reply(m.chat, '*[❗] 𝙴𝙻𝙰𝙱𝙾𝚁𝙰𝙽𝙳𝙾 𝚂𝚄 𝙳𝙸𝚂𝙴𝙽̃𝙾, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾...*', m)
  conn.reply(m.chat, '*[❗] SI SU LOGO NO ES ENVIADO CORRECTAMENTE UTILICE MENOS PALABRAS.*', m)
let res = `https://violetics.pw/api/ephoto360/cute-typography?apikey=${Key360}&text=${response[0]}`
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
  if (command == 'monkey') {
conn.reply(m.chat, '*[❗] 𝙴𝙻𝙰𝙱𝙾𝚁𝙰𝙽𝙳𝙾 𝚂𝚄 𝙳𝙸𝚂𝙴𝙽̃𝙾, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾...*', m)
  conn.reply(m.chat, '*[❗] SI SU LOGO NO ES ENVIADO CORRECTAMENTE UTILICE MENOS PALABRAS.*', m)
let res = `https://violetics.pw/api/ephoto360/monkey?apikey=${Key360}&text=${response[0]}&text2=${response[1]}`                                                                                                                // solo para probar si no funciona quitar 
conn.sendFile(m.chat, res, 'error.jpg', null, m)} 
if (command == 'girlgamer') {
conn.reply(m.chat, '*[❗] 𝙴𝙻𝙰𝙱𝙾𝚁𝙰𝙽𝙳𝙾 𝚂𝚄 𝙳𝙸𝚂𝙴𝙽̃𝙾, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾...*', m)
  conn.reply(m.chat, '*[❗] SI SU LOGO NO ES ENVIADO CORRECTAMENTE UTILICE MENOS PALABRAS.*', m)
let res = `https://violetics.pw/api/ephoto360/cute-girl-gamer?apikey=${Key360}&text=${response[0]}`
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m)    
}}
handler.command = /^1917|girlgamer|cute|monkey/i
export default handler
