/*let handler = async (m, { conn }) => {
let emot = pickRandom(["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🤩", "🥰", "😘", "😊", "🥳", "😏", "😳", "🥵", "🤯", "😱", "😨", "🤫", "🥴", "🤧", "🤑", "🤠", "🤖", "👾", "🎃", "👻", "🤡", "🤝", "💪", "👑", "🥶", "😚", "🐱", "🐈", "🐆", "🐅", "💫", "⭐️", "🌟", "✨", "⚡️", "🌈", "☃️", "⛄️", "🌝", "🌛", "🌜", "🍓", "🍎", "🍭", "🍩", "🍫", "🍧", "🚀", "🚅", "🚄", "🎈", "🪄", "🪅", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "♓️", "♒️", "♑️", "♐️", "♏️", "♎️", "♍️", "♌️", "♋️", "🔯", "🕎", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "✅", "🌝", "😎", "👻", "🔥", "🖕", "🐦"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /(ErikaBOT|Erika|Erika/BOT|erika bot|erika|gerikabot|erika - bot )/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 
*/

let handler = async (m, { conn }) => {
let emot = pickRandom(["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🤩", "🥰", "😘", "😊", "🥳", "😏", "😳", "🥵", "🤯", "😱", "😨", "🤫", "🥴", "🤧", "🤑", "🤠", "🤖", "👾", "🎃", "👻", "🤡", "🤝", "💪", "👑", "🥶", "😚", "🐱", "🐈", "🐆", "🐅", "💫", "⭐️", "🌟", "✨", "⚡️", "🌈", "☃️", "⛄️", "🌝", "🌛", "🌜", "🍓", "🍎", "🍭", "🍩", "🍫", "🍧", "🚀", "🚅", "🚄", "🎈", "🪄", "🪅", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "✅", "🌝", "😎", "👻", "🔥", "🖕", "🐦"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner|ido|ado)/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 
