
const express = require('express')
const app = express()
//all
require('dotenv').config()
const telegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN
const cors  =require('cors')

app.use(express.json())
app.use(cors())
app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200).send('webhook set successfully')
});
  const bot = new telegramBot(token, {polling:false});
  const webhookUrl = 'https://telegram-app-lac.vercel.app/bot6872431706:AAHaBvKWq2y1Ba1mNzJ1hGyBIyfMPdFe4os';

  // Устанавливаем вебхук
 bot.setWebHook(webhookUrl) 
  bot.on('message',(msg) => {
bot.sendMessage(msg.chat.id, `Вы отправили сообщение ${msgText}`)
    if(msg.text =='/start'){
      bot.sendMessage(chatId,"Привет ,это бот который будет давать задания на определенной локации  ")
    //await bot.setWebHook(webhookUrl)
    }
    if(msg.text =='/usage'){
  bot.sendMessage(chatId,"Что бы начать пользоваться приложением нажмите на кнопку   <b> &#128071</b> ",{parse_mode:'HTML'})
    }
    if(msg.text =='/help'){
    bot.sendMessage(chatId,'По всем проблемам и преложениям писать сюда', {
        "reply_markup": {
            "inline_keyboard":[
              [{text:'Админ',url:'https://t.me/Belxz999'}]
          ]
        }}) 
            }
      if(msg.text =='/location'){
       bot.sendMessage(chatId,'Нажми на кнопку снизу <b> &#128071</b> ',{
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
              // Handle the received location data
              // You can use this data to provide location-based services or information
              bot.sendMessage(msg.chat.id, `Ваши координаты: ${latitude}, ${longitude} `,{
                reply_markup:{
                  inline_keyboard: [
                    {
                      text: 'Зайти в приложение с текущей локацией',
                      web_app: {
                        url: 'https://kvestor-qhf33gc1v-belxz777s-projects.vercel.app',
                      }
                    }
                  ]
              }});
            }     
  });
  bot.on("polling_error", console.log('err'));