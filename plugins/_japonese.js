let handler = async (m,{conn, arg, command, usedPrefix}) => {
if (!arg[0])throw '*ingrese un texto*'
if(command == 'japonese'){
try{
await conn.reply(m.chat, 'elaborando su foto espere...', m)
let res = `https://violetics.pw/api/asupan/japan?apikey=${key360}&text=${response[0]}`
await conn.sendFile(m.chat,res, 'error.jpg', null, m)}

catch {
conn.reply(m.chat, 'error intete denuevo',m)
}}
}
handler.command = /^japonese/i
export default handler
