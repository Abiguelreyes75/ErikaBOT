import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*[❗𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚂𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴, 𝚂𝙸 𝙽𝙾 𝙻𝙾 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #myns*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*[❗𝐍𝐅𝐎❗] 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾, 𝙲𝙾𝙼𝙿𝚁𝚄𝙴𝙱𝙴 𝚀𝚄𝙴 𝙻𝙾 𝙷𝙰𝚈𝙰 𝙴𝚂𝙲𝚁𝙸𝚃𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴!*\n\n*𝚂𝙸 𝙽𝙾 𝙻𝙾 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #myns*'
user.registered = false
m.reply(`*[ ✔ ] 𝚂𝙴 𝚁𝙴𝙰𝙻𝙸𝚉𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾, 𝚄𝚂𝚃𝙴𝙳 𝚈𝙰 𝙽𝙾 𝙴𝚂𝚃𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
