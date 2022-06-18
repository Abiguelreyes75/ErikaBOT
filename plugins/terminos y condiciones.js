let pp = './media/menus/Menu2.jpg'
let str = `🧡 *Eso son los contactos para ti.*\n💜 *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.instagram.com/abiguelreyes75', '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣', '.infobot'],
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(terminos|privacidad)$/i
export default handler
