
let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`

const s = [
 'https://img-04.stickers.cloud/packs/318324c1-e5a3-431b-96aa-b4acd8bb9059/webp/a922f497-dc37-48d8-b65c-b5e9032059cb.webp'
 //'https://img-07.stickers.cloud/packs/61a2f791-6c81-4993-873a-e329c926d480/webp/animated/15f7362f-05a0-429a-bec8-939534632393.webp'
//'https://img-16.stickers.cloud/packs/f73a3b52-02ed-4f9c-83ea-969d698b6200/webp/animated/2887d998-3f0c-424a-aaeb-132bad02da58.webp'
 //    'https://img-15.stickers.cloud/packs/e4e40cc1-9ad1-47c2-aeba-88d246b9b6ac/webp/31d3fc0b-3dc3-43da-bdc8-700a492f8c26.webp' 
];  
conn.sendFile(m.chat, s, 'sticker.webp', '', m)

}
handler.customPrefix = /payaso|🤡|pallaso/ 
handler.command = new RegExp
export default handler
