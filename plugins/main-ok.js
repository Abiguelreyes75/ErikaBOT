const dir = [
  'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png',
  'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png',
  'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png',
  'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png'
];
let handler = async (m, { conn }) => {
conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
}
handler.help = ['ok']
handler.tags = ['ok']
handler.command = ['ok', 'ok'] 
export default handler
