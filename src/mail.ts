import "dotenv/config"
import nodemailer from 'nodemailer'
import { error, info } from "console"
import cron from 'node-cron';

const mailFunction = ( to: string, subject: string, text: string ) =>{
    //transporter
    const transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.Email,
            pass: process.env.PASSWORD
        }
    })
    // const mailOptions = {
    //     from:process.env.EMAIL,
    //     to:"michaelmwasame16@gmail.com",
    //     subject:"sending a demo mail",
    //     text:"Hey there,am max"

    // }
    const mailOptions = {
        from:process.env.EMAIL,
        to,
        subject,
        text
    }

    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(`Email sent:${info.response} `)
        }
    })
}
export default mailFunction;