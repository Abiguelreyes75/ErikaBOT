export async function all(m, conn) {
//let username = conn.getName(m.sender)
let user = global.db.data.users[m.sender]  
if (!m.message)
return
if (!user.desbloquear)
return !0
if (+new Date() > user.desbloquear) {
let tiempo = 60000 * 1
setTimeout(() => {
user.banned = false
this.sendHydrated(m.chat, `*Fue desbloqueado después de ${tiempo / 1000 - 59} Minuto, NO HAGA SPAM*`, wm, null, null, null, null, null, [
[null, null]], null)}, tiempo)
        
user.desbloquear = null
}} 
