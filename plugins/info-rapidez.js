let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`.trim()
  m.reply(txt)

await m.reply('🚀')
await m.reply('🚀🚀')
await m.reply('🚀🚀🚀')
await m.reply(`╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮`)
 
let veloz = 
`🚄 *VELOCIDAD:*\n *${speed}* *Milisegundos*\n\n🚄 *SPEED:*\n *${speed}* *Milliseconds*`

let tm = {
text: veloz,
footer: global.wm,
}
conn.sendMessage(m.chat, tm, m)
}
m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
      {title: "💖 𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼 | 𝘾𝙍𝙀𝘼𝙏𝙊𝙍 💖", description: null, rowId: `${usedPrefix}creadora`},
      {title: "💖 𝘿𝙊𝙉𝘼𝙍 | 𝘿𝙊𝙉𝘼𝙏𝙀 💖", description: null, rowId: `${usedPrefix}donar`},
      {title: "🐈 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙂𝘼𝙏𝘼 𝘽𝙊𝙏 | 𝙄𝙉𝙎𝙏𝘼𝙇𝙇 𝘾𝘼𝙏 𝘽𝙊𝙏 🐈", description: null, rowId: `${usedPrefix}instalarbot`},
      {title: "🚀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿 | 𝙎𝙋𝙀𝙀𝘿 🚀", description: null, rowId: `${usedPrefix}ping`},
      {title: "🌀 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 | 𝙁𝙐𝙇𝙇 𝙈𝙀𝙉𝙐 🌀", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "🌟 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 | 𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐 🌟", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "🏅 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 | 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍𝙎 🏅", description: null, rowId: `${usedPrefix}listprem`},
      {title: "🎟️ 𝙎𝙀𝙍 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 | 𝘽𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️", description: null, rowId: `${usedPrefix}pase premium`},
      {title: "🏆 𝙏𝙊𝙋 𝙈𝙐𝙉𝘿𝙄𝘼𝙇 𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝙏𝙊𝙍𝙄𝘼 🏆", description: null, rowId: `${usedPrefix}top`},
      {title: "🛣️ 𝙈𝙄𝙎𝙄𝙊𝙉𝙀𝙎 | 𝙈𝙄𝙎𝙎𝙄𝙊𝙉𝙎 🛣️", description: null, rowId: `${usedPrefix}inventario 3`},
      {title: "🏪 𝙏𝙄𝙀𝙉𝘿𝘼 𝙋𝘼𝙍𝘼 𝘾𝙊𝙈𝙋𝙍𝘼𝙍 🏪", description: null, rowId: `${usedPrefix}buy`}, 
      {title: "🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔 🎒", description: null, rowId: `${usedPrefix}buy`}, 
      {title: "🎡 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 | 𝙂𝘼𝙈𝙀𝙎 🎡", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "🔊 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 | 𝘼𝙐𝘿𝙄𝙊𝙎 🔊", description: null, rowId: `${usedPrefix}audios`},
      {title: "🧰 𝙈𝙀𝙉𝙐 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 🧰", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "🔰 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 | 𝙂𝙍𝙊𝙐𝙋 🔰", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "⚙️ 𝘾𝙀𝙉𝙏𝙍𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ⚙️", description: null, rowId: `${usedPrefix}on`}, 
      {title: "🎈 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔 𝙁𝙄𝙇𝙏𝙍𝙊𝙎 🎈", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "🛰️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 | 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 🛰️", description: null, rowId: `${usedPrefix}convertidormenu`},
      {title: "✨ 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎 ✨", description: null, rowId: `${usedPrefix}makermenu`}, 
      {title: "🌅 𝙈𝙀𝙉𝙐 𝙇𝙊𝙂𝙊 2 🌅", description: null, rowId: `${usedPrefix}menulogos2`},
      {title: "📲 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 | 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 📲", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "🔍 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼𝙎 | 𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐 🔍", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "⛩️ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙈𝙀 | 𝘼𝙉𝙄𝙈𝙀 ⛩️", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "🔞 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 +18 | 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 +18 🔞", description: null, rowId: `${usedPrefix}hornymenu`},
      {title: "⚗️ 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 ⚗️", description: null, rowId: `${usedPrefix}rpgmenu`},
      {title: "💎 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) | 𝙈𝙀𝙉𝙐 𝙊𝙒𝙉𝙀𝙍 💎", description: null, rowId: `${usedPrefix}ownermenu`},
      {title: "📄 𝙏𝙀𝙍𝙈𝙄𝙉𝙊𝙎, 𝘾𝙊𝙉𝘿𝙄𝘾𝙄𝙊𝙉𝙀𝙎 𝙔 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 📄", description: null, rowId: `términos`},
      

]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `╭───────────────────❀\n│${ucapan()}\n│💝¸.• *${name}* •.¸💝\n╰───────────────────❀
╭━━〔 *${wm}* 〕━━⬣
┃✪ *Tiempo Actual | Current Time*	    
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Activa durante | Active during* 
┃➺ ${uptime}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Versión de GataBot-MD 𓃠*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) | Users*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Modo | Mode*
┃➺ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Chat(s) Prohibido(s) | Chats Denied*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) Prohibido(s) | Denied Users*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━⬣`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐 : 𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐", 
sections }

let imagen = './media/menus/Menu3.jpg'
let ftroli = { key: { fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 6546464643, status: 200, thumbnail: imagen, surface: 200, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' }}, contextInfo: { "forwardingScore": 999, "isForwarded": true}, sendEphemeral: true}  

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

await conn.sendMessage(m.chat, listMessage)
//await conn.relayMessage(m.chat, { text: listMessage, mentions: [m.sender] }, { quoted: fkontak, m })
//await conn.sendMessage(m.chat, { text: listMessage, mentions: [m.sender] }, { quoted: fkontak, m })
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A) | WELCOME* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días | Good Morning* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes | Good Afternoon* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes | Good Afternoon* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches | Good Evening* 💫"
  }
  return res
} 


handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
