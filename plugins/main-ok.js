let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`


const dir = [

    'https://img-03.stickers.cloud/packs/2354561b-cfd2-4fb1-9976-2d21a119e1bf/webp/c8ce7453-592f-476e-a0a5-131a9da17ae3.webp',
    'https://img-03.stickers.cloud/packs/2354561b-cfd2-4fb1-9976-2d21a119e1bf/webp/bf5c8c69-591c-4b12-8af4-105f34dc3712.webp',
    'https://img-11.stickers.cloud/packs/add0ec11-7d6a-4638-98c6-811d1d7dbeb5/webp/0a99009a-265e-4494-8d8e-62031316b46c.webp',
    'https://img-11.stickers.cloud/packs/add0ec11-7d6a-4638-98c6-811d1d7dbeb5/webp/ddc71450-8f2f-4ad0-9cbc-bb6fd88ab9cb.webp',
    'https://img-04.stickers.cloud/packs/371fd910-9769-4dbc-8347-8be2955a08df/webp/6dbe52d3-c12f-44c7-bae6-9352cf0ff3c9.webp'
    
           //al poner te quiero  sin prefijo en el chat se envian los stickers PARAERIKABOT
    ];
    
    let handler = async(m, { conn }) => {
        conn.sendFile(m.chat, dir, , null, { asSticker: true })[Math.floor(Math.random() * dir.length)], 'sticker.webp', '', m)
       
    
    }
    handler.customPrefix = /Ok|ok|okis|okys/
    handler.command = new RegExp
    export default handler
                                                 
