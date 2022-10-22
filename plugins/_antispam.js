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

let time = user.desbloquear + 15000 * 1
let texto = `*@${m.sender.split("@")[0]} No hagas Spam!!!! 🤨!! bloqueado por ${clockString(time - new Date())}*`
if (new Date - user.desbloquear < 15000) return

await conn.sendButton(m.chat, texto, wm, null, [['Menu', '/menu']], m, { mentions: this.parseMention(texto) })
user.banned = true
user.desbloquear = new Date * 1	
//await m.reply(`${username} *No hagas Spam!!!! 🤨!! bloqueado por: 15 segundos*`) 
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})

//setTimeout(() => {
//user.banned = false
//conn.sendHydrated(m.chat, '*Fue desbloqueado después de 15 Segundos, NO HAGA SPAM*', wm, null, null, null, null, null, [
//[null, null]], null)}, 15000)
  
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

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
