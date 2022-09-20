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


let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 ${name} 💙*
*┃*
*┃ 👉🏻 𝙰𝚀𝚄𝙸 𝙰𝙻𝙶𝚄𝙽𝙾𝚂 𝙳𝙰𝚃𝙾𝚂*
*┃ 𝙿𝙾𝚁 𝚂𝙸 𝙶𝚄𝚂𝚃𝙰𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 :𝟹*
*┃*
*┃ ➤ 𝙲𝙻𝙰𝚅𝙴:* 
*┃ 646180192175788481*
*┃ ➤ 𝙱𝙰𝙽𝙲𝙾: STP* 
*┃ ➤ 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙰𝚁𝙸𝙾:* 
*┃ BRUNO SOBRINO* 
*┃ ➤ 𝙲𝙾𝙽𝙲𝙴𝙿𝚃𝙾: APOYO*  
*┃ ➤ 𝙿𝙰𝚈𝙿𝙰𝙻: https://www.paypal.me/TheShadowBrokers133*
*┃*
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝙼𝙴 𝚂𝙸* 
*┃ 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 𝙼𝙰𝚂*
*┃ 𝙳𝙰𝚃𝙾𝚂 𝚈 𝙿𝙰𝚁𝙰* 
*┃ 𝙰𝙶𝚁𝙰𝙳𝙴𝙲𝙴𝚁𝚃𝙴 <𝟹*
*┃ wa.me/5219996125657*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendButton(m.chat, donar, wm, null, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
