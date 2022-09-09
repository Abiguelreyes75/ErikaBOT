import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
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
      {title: "🚀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿 | 𝙎𝙋𝙀𝙀𝘿 🚀", description: null, rowId: `${usedPrefix}ping`},
      {title: "🎁 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 | 𝙁𝙐𝙇𝙇 𝙈𝙀𝙉𝙐 🎁", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "🏆 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝙏𝙊𝙍𝙄𝘼 🏆", description: null, rowId: `${usedPrefix}top`},
      {title: "🌟 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄Ó𝙉 | 𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐 🌟", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "🎡 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 | 𝙂𝘼𝙈𝙀𝙎 🎡", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "🔊 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 | 𝘼𝙐𝘿𝙄𝙊𝙎 🔊", description: null, rowId: `${usedPrefix}audios`},
      {title: "🧰 𝙈𝙀𝙉𝙐 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 🧰", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "🔰 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 | 𝙂𝙍𝙊𝙐𝙋 🔰", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "⚙️ 𝘾𝙀𝙉𝙏𝙍𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ⚙️", description: null, rowId: `${usedPrefix}on`},
      {title: "🎈 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔 𝙁𝙄𝙇𝙏𝙍𝙊𝙎 🎈", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "✨ 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎 ✨", description: null, rowId: `${usedPrefix}makermenu`},
      {title: "🪄 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 | 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 🪄", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "🔍 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼𝙎 | 𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐 🔍", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "⛩️ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙈𝙀 | 𝘼𝙉𝙄𝙈𝙀 ⛩️", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "⚗️ 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 ⚗️", description: null, rowId: `${usedPrefix}rpgmenu`},
      {title: "💎 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) | 𝙈𝙀𝙉𝙐 𝙊𝙒𝙉𝙀𝙍 💎", description: null, rowId: `${usedPrefix}ownermenu`},
      {title: "🔞 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 +18 | 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 +18 🔞", description: null, rowId: `${usedPrefix}hornymenu`},
      {title: "📄 𝙏𝙀𝙍𝙈𝙄𝙉𝙊𝙎, 𝘾𝙊𝙉𝘿𝙄𝘾𝙄𝙊𝙉𝙀𝙎 𝙔 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 📄", description: null, rowId: `términos`},
      {title: "🤑 𝐇𝐀𝐂𝐄𝐑 𝐀𝐏𝐔𝐄𝐒𝐓𝐀|𝐌𝐀𝐊𝐄 𝐀 𝐁𝐄𝐓 🤑", description: null, rowId: `${usedPrefix}hacerapuesta`},
      

]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `─────────────────────❀\n│${ucapan()}\n│💖•.¸💝¸.• *${name}* •.¸💝¸.•💖\n─────────────────────❀
                                                           〔 *${wm}* 〕
*_Toda la información que se mencione aquí no excluye a la Propietaria del Bot, y Propietarios Acredores al uso de GataBot-MD_*
*_No Somos responsables del desconocimiento que tenga por parte de esta información._* 
*TÉRMINOS DE PRIVACIDAD*
_- Somos consciente del constante uso que le pueda dar al Bot, y también Garantizamos que la información como (imágenes, vídeos, enlaces, ubicación, Audios, Stickers, Gif, Contactos que Usted Proporcione en torno a Número(s) Oficial(es) No son ni serán Compartido Con Nadie, ni se usaran dicho Datos fuera del entorno del BOT._
_- Lo que realicé con el BOT queda solo en Usted ya que en Número(s) Oficial(es) El Chat se Borra cada 24 Horas, según el tiempo de Mensajes Temporales de WhatsApp._
_- Es posible que en Número(s) Oficial(es) el Bot no esté Activado las 24 Horas de los 7 días de la Semana, eso no implica que no lo esté o que Propietarios NO OFICIALES puedan Hacerlo._
_- El chat anónimo del comando #start, valga la redundancia no mostrará ningún dato de los Usuarios por parte de GataBot. Eso no implica que las personas que hagan uso de esta función puedan dar a conocer sus datos. en Número(s) Oficial(es)._
_- Los Datos que Obtenga GataBot en Cuentas Oficiales de Usuarios(as), Grupos y Ajustes del Mismo puede verse Reiniciado, Modificado, y/o Retificado con el fin de que el Bot este en Óptimas Condiciones para su Uso. (Usuarios(as) Pueden Pedir Compensación Por Instagram o por el comando #Reporte. Debe de Presentar Pruebas)._
_- NO somos responsable si Hay alteraciones de este Bot no siendo Número(s) Oficial(es) y tengan de uso un Repositorio de GitHub que no corresponda al Oficial, o que implementen Usuarios de Terceros integraciones que comprometan a los(as) Usuarios(as) al utilizar Versiones no Oficiales._
*TÉRMINOS DE USO* 
_- La información que haya en este Bot y el/la usuario/a Haga uso de las Mismas asumirá saber los Términos y Condiciones de tal forma que no habrá incovenientes al hacer un uso Particular de las Funciones del Bot._
_- El Bot contiene Material que solo puede ser visible para mayores de 18 Años, NO somos responsable si no cumple con la edad mínima para usar el Material para Adultos._
_- Las imágenes, Vídeos y Audios que tenga este Bot son de uso Público, Pero se considerará Falta de Respeto al realizar Ediciones en el Material ya exitente que porte Nombre del Bot o información relevante._
_- Al hacer uso de una solicitud para ingreso de grupo con Una Cuenta Oficial, es recomendable que el grupo no cuente con temas de Odio, virus, contenido indebido, temas de discriminación u campañas sin fundamentos._
_- Si ha recibido un Comunicado Oficial siendo Número(s) Oficial(es) Mantener el Respeto de la misma manera si recibe un Mensaje sin haber usado un Comando Mantener el Respeto ya que puede en este ultimo caso ser una Persona Real._
*CONDICIONES DE USO*
_- NO haga ni intente Llamar o hacer Videollamada al Bot siendo Número(s) Oficial(es) ya que obstaculiza el funcionamiento del BOT._
_- NO usar el Bot siendo Número(s) Oficial(es) para llevar a cabo alguna acción hostil que pueda verse comprometida el Funcionamiento del BOT._
_- NO use el comando de SPAM repetidamente, ya que Provocará un Mal funcionamiento en el BOT, tampoco envie al BOT mensajes que puedan comprometer el Funcionamiento de la misma._
_- Al hacer uso de ciertos comandos que tengan como objetivo socavar la incomodidad, intranquilidad, molestia u otro termino tajante, se tomarán las respectivas sanciones o llamados de alerta para prevalecer la integridad de los/las Usuarios(as) y funcionamiento de GataBot._
*ESTE ES EL REPOSITORIO OFICIAL*
*https://github.com/GataNina-Li/GataBot-MD*
*CUENTA OFICIAL DE ASISTENCIA - INSTAGRAM*
~ _Solo en esta Cuenta Respondo si tiene Dudas, Preguntas o Necesita Ayuda sobre GataBot, También puede Comunicarse en Caso de Temas de Colaboración_
*https://www.instagram.com/gata_dios*
*DONAR A LA CREADORA EN ESTA CUENTA OFICIAL*
~ _Si te Agrada y valoras el Trabajo que he realizado, puedes ayudarme en Donar para que pueda continuar en este Proyecto_
*https://paypal.me/OficialGD*
*~ Muchas Gracias Por tomarte el tiempo en informate sobre GataBot*                                                

`, footer: `${wm}`, //${name} ${ucapan()}     
 title: null,
 buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐 | 𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐", 
 sections }

await conn.sendMessage(m.chat, listMessage)
}

handler.customPrefix = /terminos|términos|términos, condiciones y privacidad|terminos, condiciones y privacidad|términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i
handler.command = new RegExp
//handler.register = true
handler.exp = 70
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
