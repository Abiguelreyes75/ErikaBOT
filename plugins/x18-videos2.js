let handler = async(m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '❰ ⚠️ ❱ *Función Nsfw Desactivada*\n*Escriba #on nsfw para activar esta Función.*'
  
await conn.sendButtonVid(m.chat, pickRandom(asupan), '🔥🔥🔥🔥', 'Gata Dios', 'SIGUIENTE 🔄🥵', `${usedPrefix + command}`, m, false)
}
handler.command = /^(pornovid|pornovideo|Pornovid|Pornovideo|Pornvid|Ponrvid|pornvid|ponrvid|pornov)$/i
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://l.top4top.io/m_22572kvnt0.mp4",
"https://a.top4top.io/m_22741bntt0.mp4",
"https://g.top4top.io/m_2274ss8270.mp4",
"https://h.top4top.io/m_22746h8370.mp4",
"https://c.top4top.io/m_2274k1olx1.mp4",
"https://k.top4top.io/m_2274iu8ph1.mp4",
"https://c.top4top.io/m_2274813w23.mp4",
"https://g.top4top.io/m_2274qzr5b5.mp4",
"https://k.top4top.io/m_2274znr525.mp4",
"https://j.top4top.io/m_22744mccx0.mp4",
"https://g.top4top.io/m_2274dkhny3.mp4",
"https://i.top4top.io/m_2257a87ov0.mp4", 
"https://k.top4top.io/m_2257xoco60.mp4",
"https://i.top4top.io/m_2257uqopw1.mp4",
"https://b.top4top.io/m_2257p8fdg0.mp4",
"https://c.top4top.io/m_2257ju33j0.mp4",
"https://a.top4top.io/m_2257showp0.mp4",
"https://b.top4top.io/m_22578syiy0.mp4",
"https://a.top4top.io/m_22576ni620.mp4",
"https://f.top4top.io/m_2257f9mcv1.mp4",
"https://e.top4top.io/m_2257efy1t0.mp4",
"https://b.top4top.io/m_2257kc2960.mp4",
"https://b.top4top.io/m_2257oe6hv0.mp4",
"https://h.top4top.io/m_2257zsfo91.mp4",
"https://b.top4top.io/m_2257pugx00.mp4",
"https://i.top4top.io/m_225756xso0.mp4",
"https://h.top4top.io/m_22573rdw80.mp4",
"https://f.top4top.io/m_2235sxi5y1.mp4",
"https://f.top4top.io/m_2257ofv9s0.mp4",
"https://e.top4top.io/m_2257scyvl1.mp4",
"https://e.top4top.io/m_2257di15t0.mp4",
"https://d.top4top.io/m_225754y5s0.mp4",
"https://j.top4top.io/m_22573jxk20.mp4",
"https://d.top4top.io/m_2257puxyo0.mp4",
"https://e.top4top.io/m_2257bb1an0.mp4",
"https://a.top4top.io/m_2257utyrp0.mp4",
"https://b.top4top.io/m_22571xiss0.mp4",
"https://a.top4top.io/m_2257tgfkz0.mp4",
"https://a.top4top.io/m_2263r7okf0.mp4",
"https://g.top4top.io/m_2263l67d60.mp4",
"https://c.top4top.io/m_2263l4udc0.mp4",
"https://c.top4top.io/m_2263ap0rg0.mp4",
"https://a.top4top.io/m_2263lhkvu0.mp4",
"https://l.top4top.io/m_2263hwu9e0.mp4",
"https://g.top4top.io/m_22632ofax0.mp4",
"https://e.top4top.io/m_22636mlov3.mp4",
"https://l.top4top.io/m_22633xw4r0.mp4",
"https://f.top4top.io/m_2263chaub0.mp4",
"https://f.top4top.io/m_2263pljyx0.mp4",
"https://h.top4top.io/m_2263u512n0.mp4",
"https://k.top4top.io/m_22633kkj80.mp4",
"https://e.top4top.io/m_226380tpe0.mp4",
"https://g.top4top.io/m_2263bmdi20.mp4",
"https://j.top4top.io/m_2263ry6570.mp4",
"https://i.top4top.io/m_2263hkobr0.mp4",
]
