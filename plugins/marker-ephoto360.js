
/*
- Obten mas efectos en https://violetics.pw/api/ephoto360
- Usa la apikey "beta"
*/
let handler = async (m, { conn, args, command }) => { 
let response = args.join(' ').split('|')
if (!args[0]) throw '*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾*'
const (!args[2]) throw '*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 VALIDO*'
try {     
const (command == '1917') {
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
let res = `https://violetics.pw/api/ephoto360/monkey?apikey=${Key360}&text=${response[0]}&text2=${response[1]}`           // solo para probar si no funciona quitar 
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
