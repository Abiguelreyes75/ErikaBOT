import fetch from 'node-fetch'
let handler = async (m, {conn, command }) =>{
let url = pack6 [Math.floor(Math.random() * pack6.length)]
conn.sendButton(m.chat, `🥵(っ◔◡◔)っ ♥ pack ♥🥵`, author, url,[['siguiente',`/${command}`]],m)
}
handler.help = ['pack6']
handler.tags = ['internet']
handler.command = /^(pack6)$/i
handler.exp = 50
export default handler

global.pack6 = [
 
 "https://sun9-23.userapi.com/impf/c848532/v848532829/1b79c8/KQt-uJDgMdk.jpg?size=453x604&quality=96&sign=69853ca9684ee781f0b47649b0c289ab&type=album",
 "https://sun9-23.userapi.com/impf/c848532/v848532829/1b79c8/KQt-uJDgMdk.jpg?size=453x604&quality=96&sign=69853ca9684ee781f0b47649b0c289ab&type=album",
 "https://i0.wp.com/packsmegafire.com/wp-content/uploads/2020/04/Packsmegafire.com165.jpg?resize=540%2C706&ssl=1",
 "https://i2.wp.com/packsmegafire.com/wp-content/uploads/2020/06/Packsmegafire.com812-1.jpg?fit=900%2C1564&ssl=1",
 "https://pbs.twimg.com/media/E8Wzvw6XEAA7VJ-.jpg",
 "https://pbs.twimg.com/media/FJPgNuNWQA4gYMg.jpg:large",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9FEzjV7mkhn4RR91VGNOKhJUSpGB5Ogr9K_vj2c6rBj_H-C5eHIj-Q4ZhD5SwhSysic&usqp=CAU",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuo4G_A01CVfcUe0gY2KyBjFM9uRX8EbKwFq3DOeKJfXvoHuNWBn881V44EN3DbKY3J2c&usqp=CAU"
  ]
