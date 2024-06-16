import { time } from 'console'
import cron from 'node-cron'
import mailFunction from './mail'

//run hello world at every two second

cron.schedule('* * * * * *',() =>{
    console.log('Hello world')
})
// //run hello world  after a minute
// cron.schedule('* * * * *',() =>{
//     console.log('hello ')
// })
cron.schedule('* * * * *',() =>{
    mailFunction(
        'michaelmwasame16@gmail.com',
        'Pay up for the services',
        'Hello there😜🙌'
    )
})

// cron.schedule( '*/2 * * * *',() =>{
//     console.log('Hello world after 2 minutes')
// })

//ru a function on sunday of may,june,july....

// const mailme = () =>{
//     console.log('mail me');
// }

// cron.schedule('0 12 * 5-12 0',() =>{
//     mailme();// calling function
// });

// cron.schedule('0 12 * 5-12 0',() =>{
//     console.log('hey,its sunday of this month at 12:00')
// });

// //using days of the week
// cron.schedule('* * * * *',() =>{
//     console.log('Wasup');
// },{
//     scheduled: true,
//     timezone: 'America/New York'
// })