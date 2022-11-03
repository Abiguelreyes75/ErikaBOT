let handler = async (m,{conn, command, usedPrefix}) =>{
try{
 if(command == 'poemaa'){
 await conn.reply(m.chat, 'se esta enviando el poema',m)
 let poemaa = `https://violetics.pw/api/random/pantun?apikey=964f-0c75-7afc`
 await conn.senFile(m.chat, poemaa, 'error.jpg', null , m)}
}
  catch{
  conn.reply(m.chat 'error intente de nuevo',m)
  }}
handler.command = /^poemaa/i
export default handler
