const dir = [
  'https://img-03.stickers.cloud/packs/210a9e68-b249-405f-8ea1-9af015ef074a/webp/c5b7bded-e0f0-4f79-86aa-ffd825aba680.webp',
  'https://img-03.stickers.cloud/packs/210a9e68-b249-405f-8ea1-9af015ef074a/webp/c5b7bded-e0f0-4f79-86aa-ffd825aba680.webp',
  'https://img-03.stickers.cloud/packs/210a9e68-b249-405f-8ea1-9af015ef074a/webp/c5b7bded-e0f0-4f79-86aa-ffd825aba680.webp',
  'https://img-03.stickers.cloud/packs/210a9e68-b249-405f-8ea1-9af015ef074a/webp/c5b7bded-e0f0-4f79-86aa-ffd825aba680.webp'
];
let handler = async (m, { conn }) => {
conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
}
handler.customPrefix = /ok|ok|ok|ok|ok|ok/
handler.command = new RegExp
export default handler
