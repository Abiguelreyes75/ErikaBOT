import axios from 'axios'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt, usedPrefix, command, name }) => {
if (!effect) throw `${mg}𝙐𝙎𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎\n💫 *${usedPrefix + command} efecto texto*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n💫 *${usedPrefix + command} American-flag-3D GataBot*\n\n𝙀𝙉 𝘾𝘼𝙎𝙊 𝘿𝙀 𝙌𝙐𝙀 𝘿𝙄𝙂𝘼 𝙌𝙐𝙀 𝙁𝘼𝙇𝙏𝘼 𝙏𝙀𝙓𝙏𝙊 𝙐𝙎𝘼𝙍 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼\n𝙄𝙉 𝘾𝘼𝙎𝙀 𝙄𝙏 𝙎𝘼𝙔𝙎 𝙏𝙀𝙓𝙏 𝙄𝙎 𝙈𝙄𝙎𝙎𝙄𝙉𝙂 𝙐𝙎𝙀 𝙇𝙄𝙆𝙀 𝙏𝙃𝙄𝙎\n💫 *${usedPrefix + command} efecto texto1|texto2*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n💫 *${usedPrefix + command} Wolf-Logo-Galaxy GataBot|GataDios*\n\n*✨ 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎*\n\n🤍 ${usedPrefix + command} ` + effects.map(v => v.title).join(`\n💜 ${usedPrefix + command} `)
effect = effect.toLowerCase()
if (!effects.find(v => (new RegExp(v.title, 'gi')).test(effect))) throw `${mg}𝙀𝙇 𝙇𝙊𝙂𝙊 ${effect}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙐𝙀𝙉𝙏𝙍𝘼 𝙀𝙉 𝙇𝘼 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎\n\n𝙏𝙃𝙀 𝙇𝙊𝙂𝙊 ${effect} 𝙄𝙏 𝙄𝙎 𝙉𝙊𝙏 𝙄𝙉 𝙏𝙃𝙀 𝙇𝙄𝙎𝙏 𝙊𝙁 𝙇𝙊𝙂𝙊𝙎`
let text = txt.replace(new RegExp(effect, 'gi'), '').trimStart()
if (text.includes(split)) text = text.split(split)
text = Array.isArray(text) ? text : [text]
let res = await textpro(effect, ...text)
if (typeof res == 'number') throw res == -1 ? `${mg}𝙀𝙇 𝙇𝙊𝙂𝙊 ${effect}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙐𝙀𝙉𝙏𝙍𝘼 𝙀𝙉 𝙇𝘼 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎\n\n𝙏𝙃𝙀 𝙇𝙊𝙂𝙊 ${effect} 𝙄𝙏 𝙄𝙎 𝙉𝙊𝙏 𝙄𝙉 𝙏𝙃𝙀 𝙇𝙄𝙎𝙏 𝙊𝙁 𝙇𝙊𝙂𝙊𝙎` : `𝙐𝙎𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎\n\n${usedPrefix + command} ${effect} ${new Array(res).fill('texto').map((v, i) => v + (i ? i + 1 : '')).join('|')}*`
let result = await axios.get(res, {
responseType: 'arraybuffer'
})
await conn.sendFile(m.chat, result.data, 'Error.jpg', `✅ *AQUÍ ESTA TÚ LOGO!!*\n✅ *HERE IS YOUR LOGO!!*\n\n🔆 *EFECTO: ${effect}*\n${wm}`, m)
}
handler.help = ['ephoto']
handler.tags = ['nulis']
handler.command = /^(ephoto|ephoto)$/i
export default handler

import formData from 'form-data'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
var effects = [
  {
    "title": "digital-glitch",
    "url": "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html"
  },
  
  {
    "title": "cute-girl-gamer",
    "url": "https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html"
  }
]
async function textpro(effect, ...texts) {
  texts = texts.filter(v => v)
  let eff = effects.find(v => (new RegExp(v.title, 'gi')).test(effect))
  if (!eff) return -1
  let resCookie = await fetch(eff.url, {
    headers: {
      "User-Agent": "GoogleBot",
    },
  })
  let html = await resCookie.text()
  const $$$ = cheerio.load(html)
  let textRequire = [!!$$$('#text-0').length, !!$$$('#text-1').length, !!$$$('#text-2').length].filter(v => v)
  // console.log({ textRequire, texts, textRequireLength: textRequire.length, textsLength: texts.length })
  if (textRequire.length > texts.length) return textRequire.length
  let cookieParse = (cookie, query) => cookie.includes(query + '=') ? cookie.split(query + '=')[1].split(';')[0] : 'undefined'
  let hasilcookie = resCookie.headers
    .get("set-cookie")
  hasilcookie = {
    __cfduid: cookieParse(hasilcookie, '__cfduid'),
    PHPSESSID: cookieParse(hasilcookie, 'PHPSESSID')
  }
  hasilcookie = Object.entries(hasilcookie).map(([nama, value]) => nama + '=' + value).join("; ")
  const $ = cheerio.load(html)
  const token = $('input[name="token"]').attr("value")
  const form = new formData()
  for (let text of texts) form.append("text[]", text)
  form.append("submit", "Go")
  form.append("token", token)
  form.append("build_server", "https://en.ephoto360.com/")
  form.append("build_server_id", 1)
  let resUrl = await fetch(eff.url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  })
  const $$ = cheerio.load(await resUrl.text())
  let token2 = JSON.parse($$('#form_value').eq(1).text())
  let encode = encodeURIComponent;
  let body = Object.keys(token2)
    .map((key) => {
      let vals = token2[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&")
  let resImgUrl = await fetch(`https://en.ephoto360.com/effects/create-image?${body}`, {
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
    }
  })
  let results = await resImgUrl.json()
  return 'https://en.ephoto360.com/' + results.fullsize_image
}
