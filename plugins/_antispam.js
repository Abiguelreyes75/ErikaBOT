let handler = m => m
handler.all = async function (m) {

if (!db.data.chats[m.chat].antispam && m.isGroup) throw 0
this.spam = this.spam ? this.spam : {}
if (!(m.sender in this.spam)) {
let spaming = {
jid: await m.sender, 
spam: 0,
lastspam: 0
}
this.spam[spaming.jid] = spaming
  
} else try {
this.spam[m.sender].spam += 1
  
if (new Date - this.spam[m.sender].lastspam > 1500) {
if (this.spam[m.sender].spam > 3) {
this.spam[m.sender].spam = 0
  
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
let user = global.db.data.users[m.sender]

this.spam[m.sender].lastspam = new Date * 1
let tiempo = 60000 * 1
let time = user.desbloquear + tiempo * 1
let texto = `*@${m.sender.split("@")[0]} 🤨 NO HAGAS SPAM, BLOQUEADO POR ${tiempo / 1000 - 59} MINUTO*`

if (new Date - user.desbloquear < tiempo * 1) return
//await conn.reply(m.chat, texto,  m, { mentions: this.parseMention(texto) })
//await conn.sendButton(m.chat, texto, `${msToTime(time - new Date())}\n` + wm, null, [['Menu', '/menu']], m, { mentions: this.parseMention(texto) })
await conn.sendHydrated(m.chat, texto, wm, null, null, null, null, null, [
[null, null]], m, { mentions: this.parseMention(texto) }), tiempo)
user.banned = true
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
user.desbloquear = new Date * 1  
  
} else {
this.spam[m.sender].spam = 0
this.spam[m.sender].lastspam = new Date * 1
}}
  
} catch (e) {
console.log(e)
m.reply('*ERROR*')
}}
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}
