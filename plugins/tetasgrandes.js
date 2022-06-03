import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_🥵 tetasgrandes 🥵_`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
}
handler.help = ['tetasgrandes']
handler.tags = ['internet']
handler.command = /^(tetasgrandes)$/i
export default handler

global.pack = [
  "https://p-a-c-k-s.com/wp-content/uploads/2021/02/P-A-C-K-S.com_.jpeg",
  "https://laverdadnoticias.com/export/sites/laverdad/img/2020/07/25/celia_lora_chichis.jpg_776227242.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7eDws24RMLswlacqrnqDt0lgt8LxmKQcxaQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvwek-b4pohk4j1Z3JwHcPNPMEr46xTgzDQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbU7tbllOw5xP4johrQBBKndMii0ttTd0zLw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKW5ppbgHW-VgvLR-DdUUND1ec3PTjC0C08kE7DKrVlh12P5SlKuygLD1quR08uCGpRP4&usqp=CAU",
  "https://cdn77-pic.xvideos-cdn.com/videos/thumbs169ll/da/61/be/da61be7821abd00d28f973e2423b6c01/da61be7821abd00d28f973e2423b6c01.11.jpg",
  "https://www.tubemedia.info/fotos-caseras/2017/YEETPY703537/medium.jpg",
  "https://www.tubemedia.info/fotos-caseras/2019/MXFENT612733/2.jpg",
  "http://fotos.relatoeroticosintabu.xyz/imgs/2062%20(1).jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1NR2Q0vokS86nmZ6KDSJ_Oc_0Tk3TLn5PgXLSoIRRVIVsyjLoKCPiLWR2C0rs2IdPZA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuzPo5DEwAXJFJGShC_MZx4aanZSf7xMAtvhMiERtniOYGgm2Hd6WJoQ8FV6fKiBzdU70&usqp=CAU",
  "https://www.chaty.es/host2/6017482_11.jpg",
  "https://cuantoporno.com/wp-content/uploads/2021/02/Tetas-Grandes-Imagenes-Porno-Fotos-XXX-Tetonas.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzJIXTT0_5YdjZSUZaldKkSGu3aWFEqYHJA3oVz9yUowYGFGQFOdQeWZ6gUDL-VeBdF0&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREigTAF2XIJ93hjOpVVA6-NrIDcHyfGZNTl9RaW8hsWboelhqqUpZf2rZIZkofcPsV5Q0&usqp=CAU",
  "https://i.imgur.com/FLC3ZXE.jpg",
]
