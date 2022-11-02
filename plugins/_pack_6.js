import fetch from 'node-fetch'
let handler = async (m, {conn, command }) =>
let url = pack6 [Math.floor(Math.random() * pack6.length)]
conn.sendButton(m.chat, `pack6`, author, url,[['siguiente',`/${command}`]],m)
}
handler.help = ['pack6']
handler.tags = ['internet']
handler.command = /^(pack6)$/i
handler.exp = 50
export default handler

global.pack6 = [
 
 "https://sun9-23.userapi.com/impf/c848532/v848532829/1b79c8/KQt-uJDgMdk.jpg?size=453x604&quality=96&sign=69853ca9684ee781f0b47649b0c289ab&type=album",
 "https://sun9-23.userapi.com/impf/c848532/v848532829/1b79c8/KQt-uJDgMdk.jpg?size=453x604&quality=96&sign=69853ca9684ee781f0b47649b0c289ab&type=album"
  ]
