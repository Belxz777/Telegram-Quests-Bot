
const express = require('express')
const app = express()
//all
require('dotenv').config()
const telegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN
console.log(token)
const cors  =require('cors')

app.use(express.json())
app.use(cors())
  const bot = new telegramBot(token, {polling:false});
  const webhookUrl = 'https://telegram-app-lac.vercel.app/bot6872431706:AAHaBvKWq2y1Ba1mNzJ1hGyBIyfMPdFe4os';

  // Устанавливаем вебхук
  
  bot.on('message',async  (msg) => {
    const chatId = msg.chat.id;
    const msgText = msg.text    
    if(msgText ==='/start'){
     await bot.sendMessage(chatId,"Привет ,это бот который будет давать задания на велоквест. ")
    }
    if(msgText ==='/usage'){
     await bot.sendMessage(chatId,"Что бы начать пользоваться приложением нажмите на кнопку ниже   <b> &#128071</b> ",{parse_mode:'HTML'})
    }
    if(msgText ==='/help'){
       await bot.sendMessage(chatId,'По всем проблемам писать сюда', {
        "reply_markup": {
            "inline_keyboard":[
              [{text:'Админ',url:'https://t.me/gollywoodik'}]
          ]
        }}) 
  
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
              bot.sendMessage(chatId, `Ваши координаты: ${latitude}, ${longitude} `,{
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
  bot.on("polling_error", console.log);
  bot.on('location', (msg) => {
    console.log(msg.location.latitude);
    console.log(msg.location.longitude);
  });
  app.post(`/bot${token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
   const port = 4500;
app.listen(port, () => {
  console.log(`Bot is running on ${port}`)
})
bot.setWebHook(webhookUrl).then(() => {
  console.log('Вебхук успешно установлен');
}).catch((error) => {
  console.error('Ошибка при установке вебхука:', error);
});