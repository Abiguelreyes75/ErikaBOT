const Asena = require('../Utilis/events')
const { ePhotoDownload, getBuffer } = require('../Utilis/download')
const { MessageType } = require('@adiwajshing/baileys')

    //You can copy and make more plugin 
    //change #effect_url and #command_name only
    //also check inout type (#one or #two)
    //https://en.ephoto360.com/ use links from HERE

Asena.addCommand({ pattern: 'ephoto ?(.*)', fromMe: true, desc: "Ephoto list", }, async (message, match) => {
return await message.sendMessage('```' + 'sed\nsteel' + '```')
})
//Example for text effect with one input
Asena.addCommand({ pattern: 'sed ?(.*)', fromMe: true, desc: "Sad text effect", dontAddCommandList: true }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });


handler.help = ['ephoto']
handler.tags = ['nulis']
handler.command = /^(ephoto|ephoto)$/i
export default handler


   //Example for text effect with two input
Asena.addCommand({ pattern: 'steel ?(.*)', fromMe: true, desc: "Steel text effect", dontAddCommandList: true }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text\nExample .steel steel;effect")
        const [text1, text2] = match.split(';')
        if (!text1 || !text2) return await message.sendMessage("Give me text\nExample .steel steel;effect")
        const effect_url = "https://en.ephoto360.com/steel-text-effect-66.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
