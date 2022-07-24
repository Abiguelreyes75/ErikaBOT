const dir = [

   'https://img-03.stickers.cloud/packs/210a9e68-b249-405f-8ea1-9af015ef074a/webp/c5b7bded-e0f0-4f79-86aa-ffd825aba680.webp',
  'https://img-14.stickers.cloud/packs/dd1af312-1193-4190-bd9f-0f718a673c7f/webp/25afa7d4-d836-4bb8-8038-ab122a9d0ef8.webp',
  'https://img-03.stickers.cloud/packs/210a9e68-b249-405f-8ea1-9af015ef074a/webp/361b3124-eb08-42ea-91b8-6516d250b5a8.webp',
  'https://img-15.stickers.cloud/packs/ebee02f5-9df4-4e75-8bd2-11a1aa9cc65b/webp/17ea85f7-05ca-4adc-96bd-21d47ad1a7fe.webp'
    
           //al poner ok  sin prefijo en el chat se envian los stickers PARAERIKABOT
    ];
    
    let handler = async(m, { conn }) => {
        conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'sticker.webp', '', m)
    
    }
    handler.customPrefix = /Ok|ok|okis|okys/
    handler.command = new RegExp
    export default handler
                                                 
