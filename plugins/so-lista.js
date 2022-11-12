//CREDITOS PARA >> https://github.com/BrunoSobrino

let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 50  
    
if (/^mamut|el mamut$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/elmamut.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

return !0 }
export default handler
