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


handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
