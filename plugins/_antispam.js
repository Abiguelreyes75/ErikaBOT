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

this.spam[m.sender].lastspam = new Date * 1
m.reply('*No hagas Spam!!!! 🤨!! bloqueado por 15 segundos*')
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await this.updateBlockStatus(m.chat, 'block')
  
  
function desbloquear(){
//await this.updateBlockStatus(m.chat, 'unblock')  
await m.reply('*Fue desbloqueado después de 15 Segundos, NO HAGA SPAM*')
}
setTimeout(desbloquear, 15000);
  
//setTimeout(() => {
//setTimeout(function(){
//await this.updateBlockStatus(m.chat, 'unblock')
//await conn.sendHydrated(m.chat, '*Fue desbloqueado después de 15 Segundos, NO HAGA SPAM*', wm, null, null, null, null, null, [
//[null, null]], null)}, 15000) //15 segundos
//m.reply('*Fue desbloqueado después de 15 Segundos, NO HAGA SPAM*')}, 15000)

//function desbloquear(){
//await this.updateBlockStatus(m.chat, 'unblock')  
//await m.reply('*Fue desbloqueado después de 15 Segundos, NO HAGA SPAM*')
//}
//setTimeout(desbloquear, 15000);
  
} else {
this.spam[m.sender].spam = 0
this.spam[m.sender].lastspam = new Date * 1
    
}}
  
} catch (e) {
console.log(e)
m.reply('*ERROR*')
}}
export default handler
