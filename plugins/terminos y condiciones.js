import fs from 'fs'
function handler(m, { conn }) {
let text = `
*𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤 | 𝘾𝙤𝙣𝙩𝙖𝙘𝙩* 
*Wa.me/16479546631 (BOT)*
*https://www.instagram.com/abiguelreyes75*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'Erika-BOT | Erika-BOT',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫𝐚 | 𝐂𝐫𝐞𝐚𝐭𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/16479546631`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `🧡 *=> El desconocimiento de lo que aqui se menciona no exime al propietario del Bot, Sub Bot o usuario del bot de la sanciones que se puedan derivar❗*
*⚠️ Términos de privacidad*
_1.- La información que reciba el Bot NO se comparte con ningún tercero ni con nadie_
_2.- Las imágenes/videos/sticker/audios/etc no son compartidos con nadie_
_3.- Su numero de teléfono no es compartido con absolutamente nadie_
_4.- Datos de tarjetas, ubicaciones, direcciones, etc son eliminados inmediatamente y no se comparten con absolutamente nadie_
_5.- Todas las conversaciones son eliminadas cada determinado tiempo y no se hace backup (no se guarda) de ningún tipo de información/conversación_
*⚠️ Términos de uso*
_1.- No nos hacemos responsables de un mal uso que se le pueda dar al Bot_
_2.- No nos hacemos responsables de la ignorancia y/o desconocimiento del tema_
_3.- El Bot no esta activo las 24 horas al menos de que el propietario decida lo contrario_
_4.- La "empresa" no se hace responsable del uso de un Sub Bot o Bot no oficial, ya que son personas (terceros) y no tenemos control sobre ell@s_
_5.- No nos hacemos responsables de los números que se puedan ir a soporte por el uso del Bot, es aconsejable siempre usar números virtuales para usos de Bots_
_6.- Los audios/notas de voz/imágenes/videos o cualquier otro archivo multimedia que sean de propiedad de The Shadow Brokers - Bot son únicamente y exclusivamente de este Bot, si se detecta a otro Bot con alguno o algunos de los archivos multimedia antes mencionado se tomarán cartas en el asunto._
*➤ Mensaje del numero del Bot?*
_- Si en algún momento recibe un mensaje del numero del Bot y no es un comando posiblemente sea de el propietario del Bot o el propietario del numero, este es un persona real por lo que se le pide que no le falte el respeto_
*⁉️ Te quedaron dudas?*
_- Si todavía tienes alguna duda o reclamo de lo mencionado aqui o referente al Bot, contáctame a mi numero personal al cual estaré respondiendo lo antes posible para brindarte una solución y/o hacerme responsable de alguna reclamación_ 
> wa.me/16479546631
> Erika BOT 
> Correo electronico: MUY PRONTO
→ *Solo contactar por temas serios, para preguntas del Bot mas generales contáctame al privado con el comando del comando #owner (al numero wa.me/16479546631)*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.instagram.com/abiguelreyes75', '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣', '.infobot'],
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
