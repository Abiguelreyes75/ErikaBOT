    let handler = async (m,{conn, arg, command, usedPrefix}) => { 
    try{
    if(command == 'japonese'){
    await conn.reply(m.chat, '*[📷]𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐬𝐮 𝐟𝐨𝐭𝐨 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
    let res = `https://violetics.pw/api/asupan/japan?apikey=${Key360}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if(command == 'vietnam'){
    await conn.reply(m.chat, '*[📷]𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐬𝐮 𝐟𝐨𝐭𝐨 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
    let res = `https://violetics.pw/api/asupan/vietnam?apikey=${Key360}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if(command == 'thailand'){
    await conn.reply(m.chat, '*[📷]𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐬𝐮 𝐟𝐨𝐭𝐨 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
    let res = `https://violetics.pw/api/asupan/thailand?apikey=${Key360}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if(command == 'malaysia'){
    await conn.reply(m.chat, '*[📷]𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐬𝐮 𝐟𝐨𝐭𝐨 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
    let res = `https://violetics.pw/api/asupan/malaysia?apikey=${Key360}`
    await conn.sendFile(m.chat, res, 'error.jpg', null , m)}

    if(command == 'korea'){
    await conn.reply(m.chat, '*[📷]𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐬𝐮 𝐟𝐨𝐭𝐨 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
    let res = `https://violetics.pw/api/asupan/korea?apikey=${Key360}`
    await conn.sendFile(m.chat, res, 'error.jpg', null ,m)}

    if(command == 'indonesia'){
    await conn.reply(m.chat, '*[📷]𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐬𝐮 𝐟𝐨𝐭𝐨 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
    let res = `https://violetics.pw/api/asupan/indonesia?apikey=${Key360}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if(command = 'chinese'){
    await conn.reply(m.chat, '*[📷]𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐬𝐮 𝐟𝐨𝐭𝐨 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
    let res = `https://violetics.pw/api/asupan/chinese?apikey=${Key360}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    if(command == 'cecan'){
    await conn.reply(m.chat, '*[📷]𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐬𝐮 𝐟𝐨𝐭𝐨 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨...*', m)
    let res = `https://violetics.pw/api/asupan/cecan?apikey=${Key360}`
    await conn.sendFile(m.chat, res, 'error.jpg', null, m)}

    }
    catch {
    conn.reply(m.chat, 'error intente de nuevo',m)
    }}
    handler.command = /^japonese|vietnam|thailand|malaysia|korea|indonesia|chinese|cecan/i
    export default handler
