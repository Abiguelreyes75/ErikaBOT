export async function all(m, conn) {
let texto
let user = global.db.data.users[m.sender]  
if (!m.message)
return
if (!user.desbloquear)
return !0
if (+new Date() > user.desbloquear) {
let tiempo = 60000 * 1
setTimeout(() => {
user.banned = false
texto = `*@${m.sender.split("@")[0]} FUE DESBLOQUEADO DESPUÉS DE 1 MINUTO, POR FAVOR NO HAGA SPAM!!*`
//await this.reply(m.chat, texto,  m, { mentions: this.parseMention(texto) })}, tiempo)
this.sendButton(m.chat, texto, wm, null, [['☘️ 𝗠 𝗘 𝗡 𝗨', '/menu']], m, { mentions: this.parseMention(texto) })}, tiempo)
//this.sendHydrated(m.chat, `*Fue desbloqueado después de ${tiempo / 1000 - 59} Minuto, NO HAGA SPAM*`, wm, null, null, null, null, null, [
//[null, null]], null)}, tiempo)
        
user.desbloquear = null
}}
