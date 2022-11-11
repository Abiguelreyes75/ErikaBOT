let handler = async (m,{conn,args,command}) => {
let response = args.join(' ').split('|')
if (!args[0]) throw '*[❗] ingrese un texto ejemplo .chiken hola|teamo*'
try{

if (command == 'chiken'){
await conn.reply(m.chat, `𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙎𝙐 𝙇𝙊𝙂𝙊 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝙉𝘿𝙊`, m)
let res = `https://violetics.pw/api/ephoto360/chicken?apikey=${Key360}&text=${response[0]}&text2=${response[1]}`
await conn.SendFile(m.chat,res, 'error.jpg',null,m)}
}
catch{
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m) 
}}
handler.command = /^chiken/i
handler.exp = 50
export default handler

