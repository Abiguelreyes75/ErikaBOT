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
  
if (new Date - this.spam[m.sender].lastspam > 2000) {
if (this.spam[m.sender].spam > 3) {
this.spam[m.sender].spam = 0
  
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
let user = global.db.data.users[m.sender]

this.spam[m.sender].lastspam = new Date * 1

//let username = conn.getName(m.sender)
//var tiempo = 15000 * 1 //15s
//var now = new Date() * 1
//let bloquear = await this.updateBlockStatus(m.chat, 'block')
//if (now < user.desbloquear) user.desbloquear += tiempo
//else user.desbloquear = now + tiempo
user.banned = true
await m.reply(`${username} *No hagas Spam!!!! 🤨!! bloqueado por: 15 segundos*`) 
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
setTimeout(() => {
//conn.updateBlockStatus(m.chat, 'unblock')  
user.banned = false
conn.sendHydrated(m.chat, '*Fue desbloqueado después de 15 Segundos, NO HAGA SPAM*', wm, null, null, null, null, null, [
[null, null]], null)}, 15000)
//await this.updateBlockStatus(m.chat, 'block')
  
//setTimeout(() => {
//conn.updateBlockStatus(m.chat, 'unblock')  
//conn.sendHydrated(m.chat, '*Fue desbloqueado después de 15 Segundos, NO HAGA SPAM*', wm, null, null, null, null, null, [
//[null, null]], null)}, 15000)

} else {
this.spam[m.sender].spam = 0
this.spam[m.sender].lastspam = new Date * 1
    
}}
  
} catch (e) {
console.log(e)
m.reply('*ERROR*')
}}
export default handler

/*function msToDate(ms) {
let temp = ms
let days = Math.floor(ms / (24 * 60 * 60 * 1000));
let daysms = ms % (24 * 60 * 60 * 1000);
let hours = Math.floor((daysms) / (60 * 60 * 1000));
let hoursms = ms % (60 * 60 * 1000);
let minutes = Math.floor((hoursms) / (60 * 1000));
let minutesms = ms % (60 * 1000);
let sec = Math.floor((minutesms) / (1000));
return days + " *Día(s)* ☀️\n" + hours + " *Hora(s)* ⏳\n" + minutes + " *Minuto(s)* ⏰\n" + sec + " *Segundo(s)* 🕐\n";
}*/


/*export async function all(m) {
if (!m.message)
return
this.spam = this.spam ? this.spam : {}
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (chat.antiSpam) {

if (m.sender in this.spam) {
this.spam[m.sender].count++
if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 2000) {
if (this.spam[m.sender].count > 3) {
user.banned = true

let texto = `*@${m.sender.split("@")[0]} No hagas Spam!!!! 🤨!! bloqueado por 15 segundos`
this.sendButton(m.chat, texto, wm, null, [['Menu', '/menu']], m, { mentions: this.parseMention(texto) })
setTimeout(() => {
//conn.updateBlockStatus(m.chat, 'unblock')  
user.banned = false
conn.sendHydrated(m.chat, '*Fue desbloqueado después de 15 Segundos, NO HAGA SPAM*', wm, null, null, null, null, null, [
[null, null]], null)}, 15000)
}
this.spam[m.sender].count = 0
this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
}}else
this.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
}}}*/
