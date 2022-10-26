import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙍 𝙏𝙄𝙏𝙇𝙀\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Billie Eilish - Bellyache*`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw `${fg}𝙉𝙊 𝙎𝙀 𝙋𝙐𝘿𝙊 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼𝙍 𝙀𝙇 𝘼𝙐𝘿𝙄𝙊/𝙑𝙄𝘿𝙀𝙊. 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘾𝙊𝙉 𝙊𝙏𝙍𝙊 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n\n𝙏𝙃𝙀 𝘼𝙐𝘿𝙄𝙊/𝙑𝙄𝘿𝙀𝙊 𝘾𝙊𝙐𝙇𝘿 𝙉𝙊𝙏 𝘽𝙀 𝙁𝙊𝙐𝙉𝘿. 𝙏𝙍𝙔 𝘼𝙉𝙊𝙏𝙃𝙀𝙍 𝙉𝘼𝙈𝙀 𝙊𝙍 𝙏𝙄𝙏𝙇𝙀`
  try {
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendButton(m.chat, wm, `*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*
╭━━━━━━━❰  *𓃠*  ❱━━━━━━━⬣
✦ 𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀
✦ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 | 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉
✦ ${description}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊 | 𝙋𝙐𝘽𝙇𝙄𝙎𝙃𝙀𝘿
✦ ${publishedTime}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 | 𝘿𝙐𝙍𝘼𝙏𝙄𝙊𝙉
✦ ${durationH}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙑𝙄𝙎𝙏𝘼𝙎 | 𝙑𝙄𝙀𝙒𝙎
✦ ${viewH}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙐𝙍𝙇
✦ ${url}
*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*`, thumbnail, [['𝗠 𝗘 𝗡 𝗨 🌸', '/menu']], m,)
                          
const sections = [{
title: comienzo + ' 📡 𝗧𝗜𝗣𝗢𝗦 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ' + fin,
rows: [
  {title: "🌸 𝗔 𝗨 𝗗 𝗜 𝗢 🌸 (Opcion 1)",rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
  {title: "🌸 𝗩 𝗜 𝗗 𝗘 𝗢 🌸 (Opcion 2)",rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
  ]},{
  title: comienzo + ' 🔎 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔 𝗔𝗩𝗔𝗡𝗭𝗔𝗗𝗔 🔎 ' + fin ,
  rows: [  
{title:"☘️ 𝗠 𝗔 𝗦   𝗥 𝗘 𝗦 𝗨 𝗟 𝗧 𝗔 𝗗 𝗢 𝗦 ☘️",rowId: `${usedPrefix}ytsearch ${text}`}
]}]
   
const listMessage = {
  text: `*𝙀𝙇𝙄𝙅𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙃𝘼𝘾𝙀𝙍 𝘾𝙊𝙉  ${text}*`,
  footer: global.wm,
  title: `${htki} *✨ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 ✨* ${htka}`,
  buttonText: `🎀 𝙀𝙇𝙀𝙍𝙂𝙄𝙍 🎀`,
  sections
}
    
await conn.sendMessage(m.chat, listMessage,)
}catch(e){
m.reply(`𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊\n𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉`)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.limit = 1
export default handler
