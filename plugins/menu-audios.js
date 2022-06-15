import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric' 
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = './media/menus/Menuvid3.mp4'
  
 let str = `
╭━━〔 🐈⚡️🐈⚡️🐈⚡️🐈 〙━━⬣   
┃ 💖 ¡Hola! ${username} 💖
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *No es necesario el prefijo*
┃ *Puede solo escribir la*
┃ *Palabra o Frase.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔊_Quien es tu sempai botsito 7w7_
┃🔊_Te diagnostico con gay_
┃🔊_A nadie le importa_
┃🔊_Fiesta del admin_
┃🔊_Fiesta del administrador_
┃🔊_Lo mismo pero mas barato_
┃🔊_Vivan los novios_
┃🔊_Feliz cumpleaños_
┃🔊_Noche de paz_
┃🔊_Caiste_
┃🔊_Que suerte tienen algunos_
┃🔊_Madres que pedo_
┃🔊_Esto se va a poner feo_
┃🔊_Quieres que me ponga rudo_
┃🔊_entradaepica_
┃🔊_casi me cago del susto_
┃🔊_Buenos dias_
┃🔊_el mamut_
┃🔊_Es lo mas estupido que eh oido_
┃🔊_algo anda mal_
┃🔊_Puta que oferton_
┃🔊_Ya es toda wey_
┃🔊_acercate viejo_
┃🔊_donde esta tu honor basura_
┃🔊_Alan que pendejada hiciste_
┃🔊_abduzcan_
┃🔊_corre perra corre_
┃🔊_si dicelo al juez rosadito_
┃🔊_ahorita vemos que pedo_
┃🔊_Buenos tardes_
┃🔊_pasen contexto_
┃🔊_risa del arabe_
┃🔊_aver que paso_
┃🔊_esto no era parte del trato_
┃🔊_que buen servicio_
┃🔊_Buenos noches_
┃🔊_Esponja enloqueciste_
┃🔊_Uy si claro_
┃🔊_Audio hentai_
┃🔊_Chica lgante_
┃🔊_Feliz navidad_
┃🔊_bien pensado woody_
┃🔊_Vete a la vrg_
┃🔊_Pasa pack Bot_
┃🔊_Sustos que dan gusto_
┃🔊_Atencion grupo_
┃🔊_Marica quien_
┃🔊_Murio el grupo_
┃🔊_Oh me vengo_
┃🔊_Viernes_
┃🔊_Baneado_
┃🔊_Sexo_
┃🔊_puerco_
┃🔊_Hola_
┃🔊_Un pato_
┃🔊_Nyanpasu_
┃🔊_Te amo_
┃🔊_Yamete_
┃🔊_Bañate_
┃🔊_Es puto_
┃🔊_La biblia_
┃🔊_Onichan_
┃🔊_Mierda de Bot_
┃🔊_Siuuu_
┃🔊_Rawr_
┃🔊_UwU_
┃🔊_:c_
┃🔊_a_
╰━━━━━━〔 *𓃠 ${vs}* 〕━━━━━━⬣
`.trim()
await conn.sendHydrated(m.chat, str, wm, pp, md, 'Erika-BOT', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu'],
['𝙈𝙚𝙣𝙪 𝙙𝙚𝙨𝙥𝙡𝙚𝙜𝙖𝙗𝙡𝙚 | 𝙈𝙚𝙣𝙪 𝙇𝙞𝙨𝙩 🌟', '/menulista'],
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 ⚡', '#menu']
], m)  
  
  

const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
{title: "❇️ 𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 |  𝘿𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙 ❇️", description: null, rowId: `${usedPrefix}menu`},
{title: "✳️ 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✳️", description: null, rowId: `${usedPrefix}allmenu`},
{title: "✅ 𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅", description: null, rowId: `${usedPrefix}cuentasgatabot`},  
  
{title: "➥🔊 Quien es tu sempai botsito 7w7", description: null, rowId: `Quien es tu sempai botsito 7w7`},
{title: "➥🔊 Te diagnostico con gay", description: null, rowId: `Te diagnostico con gay`},
{title: "➥🔊 A nadie le importa", description: null, rowId: `A nadie le importa`},
{title: "➥🔊 Fiesta del admin", description: null, rowId: `Fiesta del admin`},
{title: "➥🔊 Fiesta del administrador", description: null, rowId: `Fiesta del administrador`},
{title: "➥🔊 Lo mismo pero mas barato", description: null, rowId: `Lo mismo pero mas barato`},
{title: "➥🔊 Vivan los novios", description: null, rowId: `Vivan los novios`},
{title: "➥🔊 Feliz cumpleaños", description: null, rowId: `Feliz cumpleaños`},
{title: "➥🔊 Noche de paz", description: null, rowId: `Noche de paz`},
{title: "➥🔊 Caiste", description: null, rowId: `Caiste`},
{title: "➥🔊 Que suerte tienen algunos", description: null, rowId: `Que suerte tienen algunos`},
{title: "➥🔊 Madres que pedo", description: null, rowId: `Madres que pedo`},
{title: "➥🔊 Esto se va a poner feo", description: null, rowId: `Esto se va a poner feo`},
{title: "➥🔊 Quieres que me ponga rudo", description: null, rowId: `Quieres que me ponga rudo`},
{title: "➥🔊 entradaepica", description: null, rowId: `entradaepica`},
{title: "➥🔊 casi me cago del susto", description: null, rowId: `casi me cago del susto`},
{title: "➥🔊 Buenos dias", description: null, rowId: `Buenos dias`},
{title: "➥🔊 el mamut", description: null, rowId: `el mamut`},
{title: "➥🔊 Es lo mas estupido que eh oido", description: null, rowId: `Es lo mas estupido que eh oido`},
{title: "➥🔊 algo anda mal", description: null, rowId: `algo anda mal`},
{title: "➥🔊 Puta que oferton", description: null, rowId: `Puta que oferton`},
{title: "➥🔊 Ya es toda wey", description: null, rowId: `Ya es toda wey`},
{title: "➥🔊 acercate viejo", description: null, rowId: `acercate viejo`},
{title: "➥🔊 donde esta tu honor basura", description: null, rowId: `donde esta tu honor basura`},
{title: "➥🔊 Alan que pendejada hiciste", description: null, rowId: `Alan que pendejada hiciste`},
{title: "➥🔊 abduzcan", description: null, rowId: `abduzcan`},
{title: "➥🔊 corre perra corre", description: null, rowId: `corre perra corre`},
{title: "➥🔊 si dicelo al juez rosadito", description: null, rowId: `si dicelo al juez rosadito`},
{title: "➥🔊 ahorita vemos que pedo", description: null, rowId: `ahorita vemos que pedo`},
{title: "➥🔊 Buenos tardes", description: null, rowId: `Buenos tardes`},
{title: "➥🔊 pasen contexto", description: null, rowId: `pasen contexto`},
{title: "➥🔊 risa del arabe", description: null, rowId: `risa del arabe`},
{title: "➥🔊 aver que paso", description: null, rowId: `aver que paso`},
{title: "➥🔊 esto no era parte del trato", description: null, rowId: `esto no era parte del trato`},
{title: "➥🔊 que buen servicio", description: null, rowId: `que buen servicio`},
{title: "➥🔊 Buenos noches", description: null, rowId: `Buenos noches`},
{title: "➥🔊 Esponja enloqueciste", description: null, rowId: `Esponja enloqueciste`},
{title: "➥🔊 Uy si claro", description: null, rowId: `Uy si claro`},
{title: "➥🔊 Audio hentai", description: null, rowId: `Audio hentai`},
{title: "➥🔊 Chica lgante", description: null, rowId: `Chica lgante`},
{title: "➥🔊 Feliz navidad", description: null, rowId: `Feliz navidad`},
{title: "➥🔊 bien pensado woody", description: null, rowId: `bien pensado woody`},
{title: "➥🔊 Vete a la vrg", description: null, rowId: `Vete a la vrg`},
{title: "➥🔊 Pasa pack Bot", description: null, rowId: `Pasa pack Bot`},
{title: "➥🔊 Sustos que dan gusto", description: null, rowId: `Sustos que dan gusto`},
{title: "➥🔊 Atencion grupo", description: null, rowId: `Atencion grupo`},
{title: "➥🔊 Marica quien", description: null, rowId: `Marica quien`},
{title: "➥🔊 Murio el grupo", description: null, rowId: `Murio el grupo`},
{title: "➥🔊 Oh me vengo", description: null, rowId: `Oh me vengo`},
{title: "➥🔊 Viernes", description: null, rowId: `Viernes`},
{title: "➥🔊 Baneado", description: null, rowId: `Baneado`},
{title: "➥🔊 Sexo", description: null, rowId: `Sexo`},
{title: "➥🔊 puerco", description: null, rowId: `puerco`},
{title: "➥🔊 Hola", description: null, rowId: `Hola`},
{title: "➥🔊 Un pato", description: null, rowId: `Un pato`},
{title: "➥🔊 Nyanpasu", description: null, rowId: `Nyanpasu`},
{title: "➥🔊 Te amo", description: null, rowId: `Te amo`},
{title: "➥🔊 Yamete", description: null, rowId: `Yamete`},
{title: "➥🔊 Bañate", description: null, rowId: `Bañate`},
{title: "➥🔊 Es puto", description: null, rowId: `Es puto`},
{title: "➥🔊 La biblia", description: null, rowId: `La biblia`},
{title: "➥🔊 Onichan", description: null, rowId: `Onichan`},
{title: "➥🔊 Mierda de Bot", description: null, rowId: `Mierda de Bot`},
{title: "➥🔊 Siuuu", description: null, rowId: `Siuuu`},
{title: "➥🔊 Rawr", description: null, rowId: `Rawr`},
{title: "➥🔊 UwU", description: null, rowId: `UwU`},
{title: "➥🔊 :c", description: null, rowId: `:c`},
{title: "➥🔊 a", description: null, rowId: `a`},
]}, ]
//let name = await conn.getName(m.sender)

const listMessage = {
text: `Erika-BOT | 𝘼𝙐𝘿𝙄𝙊𝙎`,
footer: `*╭━━━〔 𝙈𝙀𝙉𝙐 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊 〕━━━⬣*
*┃ 𝙃𝙚𝙮! 𝙖𝙦𝙪𝙞 𝙥𝙪𝙚𝙙𝙚 𝙚𝙡𝙚𝙜𝙞𝙧*
*┃ 𝙚𝙡 𝘼𝙪𝙙𝙞𝙤 𝙖 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤.*
*╰━━━━━━━━━━━━━━━━━⬣*
${wm}`,
title: null,
buttonText: "𝙎𝙀𝙇𝙀𝘾𝘾𝙄𝙊𝙉𝘼𝙍 𝘼𝙐𝘿𝙄𝙊", 
sections }

 conn.sendMessage(m.chat, listMessage)

}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.exp = 60
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
