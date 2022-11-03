let handler = async (m,{conn, arg, command, usedPrefix}) => {
    if(command == 'poema'){
    try{
    await conn.reply(m.chat, '*[📷]𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐬𝐮 POEMA 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
    let res = `https://violetics.pw/api/random/pantun?apikey=${Key360}`
    await conn.sendFile(m.chat,res, 'error.jpg', null, m)}
    
    catch {
    conn.reply(m.chat, 'error intete denuevo',m)
    }}
    }
    handler.command = /^poema/i
    export default handler
