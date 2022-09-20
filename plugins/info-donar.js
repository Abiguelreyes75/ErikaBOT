/*let handler = async (m, { conn, command }) => {
let donar = `
💖 𝙃𝙤𝙡𝙖!! 𝘼𝙜𝙧𝙖𝙙𝙚𝙯𝙘𝙤 𝙨𝙞 𝙢𝙚 𝘼𝙥𝙤𝙮𝙖𝙨 𝘿𝙤𝙣𝙖𝙣𝙙𝙤. 🎁 𝙈𝙚 𝙖𝙜𝙧𝙖𝙙𝙖 𝙚𝙡 𝙏𝙧𝙖𝙗𝙖𝙟𝙤 𝙦𝙪𝙚 𝙝𝙚 𝙇𝙤𝙜𝙧𝙖𝙙𝙤 𝙮 𝙡𝙤 𝘾𝙤𝙢𝙥𝙖𝙧𝙩𝙤 𝙘𝙤𝙣 𝙐𝙨𝙩𝙚𝙙𝙚𝙨. 𝙂𝙧𝙖𝙘𝙞𝙖𝙨!

💖 𝙃𝙚𝙡𝙡𝙤!! 𝙄 𝙖𝙥𝙥𝙧𝙚𝙘𝙞𝙖𝙩𝙚 𝙞𝙛 𝙮𝙤𝙪 𝙨𝙪𝙥𝙥𝙤𝙧𝙩 𝙢𝙚 𝙗𝙮 𝙙𝙤𝙣𝙖𝙩𝙞𝙣𝙜. 🎁 𝙄 𝙡𝙞𝙠𝙚 𝙩𝙝𝙚 𝙬𝙤𝙧𝙠 𝙄 𝙝𝙖𝙫𝙚 𝙖𝙘𝙝𝙞𝙚𝙫𝙚𝙙 𝙖𝙣𝙙 𝙨𝙝𝙖𝙧𝙚 𝙬𝙞𝙩𝙝 𝙮𝙤𝙪. 𝙏𝙝𝙖𝙣𝙠 𝙮𝙤𝙪!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙋𝙖𝙮𝙋𝙖𝙡 - Erika-BOT
*https://paypal.me/OficialGD*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
`.trim()

handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler*/

let handler = async (m, { conn, usedPrefix }) => {   
let text = `
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙴𝚂 wa.me/5219992095479*
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 𝟷 𝙴𝚂 wa.me/34642467703*
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 2 𝙴𝚂 wa.me/50499698072*
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 3 𝙴𝚂 wa.me/595986460945*
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 4 𝙴𝚂 wa.me/51940617554*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': text,
'buttons':[
{buttonId: `${usedPrefix}menucompleto`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑;;;\nFN:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nORG:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nTITLE:\nitem1.TEL;waid=5219996125657:+521 999 612 5657\nitem1.X-ABLabel:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nX-WA-BIZ-DESCRIPTION:[❗] ᴄᴏɴᴛᴀᴄᴛᴀ ᴀ ᴇsᴛᴇ ɴᴜᴍ ᴘᴀʀᴀ ᴄᴏsᴀs ɪᴍᴘᴏʀᴛᴀɴᴛᴇs.\nX-WA-BIZ-NAME:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Bruno Sobrino 👑', contacts: [{ vcard }] }}, {quoted: m})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
