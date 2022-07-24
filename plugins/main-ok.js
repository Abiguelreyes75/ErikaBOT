let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`


const dir = [

   'https://img-03.stickers.cloud/packs/210a9e68-b249-405f-8ea1-9af015ef074a/webp/c5b7bded-e0f0-4f79-86aa-ffd825aba680.webp',
  'https://img-14.stickers.cloud/packs/dd1af312-1193-4190-bd9f-0f718a673c7f/webp/25afa7d4-d836-4bb8-8038-ab122a9d0ef8.webp',
  'https://img-03.stickers.cloud/packs/210a9e68-b249-405f-8ea1-9af015ef074a/webp/361b3124-eb08-42ea-91b8-6516d250b5a8.webp',
  'https://img-15.stickers.cloud/packs/ebee02f5-9df4-4e75-8bd2-11a1aa9cc65b/webp/17ea85f7-05ca-4adc-96bd-21d47ad1a7fe.webp'
    
           //al poner ok  sin prefijo en el chat se envian los stickers PARAERIKABOT
    ];
    
    
        conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'sticker.webp', '', m)
        conn.sendFile(m.chat, stiker, null, { asSticker: true })
    
    }
    handler.customPrefix = /Ok|ok|okis|okys/
    handler.command = new RegExp
    export default handler
                                                 
