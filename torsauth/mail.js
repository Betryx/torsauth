const nodemailer = require('nodemailer');
const uid = require('uid-generator');
const cnf = require("configparser")
const config = new cnf()
const uidgen = new uid();
function def(email){
    console.log(email)

    let trans = nodemailer.createTransport({
        service:"hotmail",
        auth:{
            user: "TORSauth@hotmail.com",
            pass:"TORSaut2345"
        }
    })


    const ud = uidgen.generateSync()
    config.write(`${ud}.auth`)
    var cont = {
        from:"TORSauth@hotmail.com",
        to: email,
        subject:`Hello ${email}. Your auth code is:`,
        text:`Auth code: ${ud}\nSent by Torsauth system`
    }


    function cld(err, info){
        console.log(err)
    }
    trans.sendMail(cont, cld)
}
def("sivkovsimeon12@gmail.com")
module.exports = def