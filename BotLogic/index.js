const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express')
const app = express()
//all
const axios = require('axios')
require('dotenv').config()
const telegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN
console.log(token)
const cors  =require('cors')
const bot = new telegramBot(token, {polling: true});

app.use(express.json())
app.use(cors())
  bot.on('message',async  (msg) => {
    const chatId = msg.chat.id;
    const receiver = msg.from.username
    const msgText = msg.text    
    if(msgText ==='/start'){
     await bot.sendMessage(chatId,"Привет ,это бот который будет давать задания на определенной локации  ")
    }
    if(msgText ==='/usage'){
     await bot.sendMessage(chatId,"Что бы начать пользоваться приложением нажмите на кнопку   <b> &#128071</b> ",{parse_mode:'HTML'})
    }
    if(msgText ==='/help'){
       await bot.sendMessage(chatId,'По всем проблемам и преложениям писать сюда', {
        "reply_markup": {
            "inline_keyboard":[
              [{text:'Админ',url:'https://t.me/Belxz999'}]
          ]
        }}) 
        await bot.sendContact(chatId,'8 982 124 9732','Roman Belxz')
            }
      if(msgText ==='/location'){
        await bot.sendMessage(chatId,'Нажми на кнопку снизу <b> &#128071</b> ',{
          parse_mode:'HTML',
          reply_markup:{
            keyboard :[
              [{text: 'Определить мою локацию', request_location: true}]
            ]
          }
        })
            }     
              if (msg.location) {
              const latitude = msg.location.latitude;
        const longitude = msg.location.longitude;
        console.log(latitude,longitude)
              // Handle the received location data
              // You can use this data to provide location-based services or information
              bot.sendMessage(chatId, `Ваши координаты: ${latitude}, ${longitude}`);
            }
  });
  bot.on("polling_error", console.log);
  bot.on('location', (msg) => {
    console.log(msg.location.latitude);
    console.log(msg.location.longitude);
  });
  app.get('/api/', (req, res) => {
res.send('hello')
  }
    )
   const port = 4500;
app.listen(port, () => {
  console.log(`Bot is running on ${port}`)
})