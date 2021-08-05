const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: 'plataforma5navent@gmail.com',
    pass: 'xdhpgkeltdnfjewu',
  },
})

async function AssignRecruiter(recruiter, job) {
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Bumeran Select" <plataforma5Navent@gmail.com>', // sender address
      to: recruiter.email,
      subject: 'Nueva busqueda asignada', // Subject line
      // text: 'Resumen de la orden', // plain textbody
      html: `<div>
            <h1>Hola ${recruiter.name} ${recruiter.surname},  Te han asignado una nueva Busqueda, Felicitaciones!</h1>
            <h2>Busqueda: ${job.title}</h2>
            <h2>Descripcion: ${job.description}</h2>
            <h2>Salario: ${job.salary}</h2>
            <h2>Estado: ${job.isOpen}</h2>
            <hr/>
       
            <h5> Por favor envia los candidatos presentados</h5>
            <hr/>
        </div>`, // html body
    })
  } catch (err) {
    console.log(err)
  }
}
async function CloseJobSendEmail(
  rating,
  email,
  name,
  surname,
  recruiterComment,
  title,
  company
) {
  try {
    // send mail with defined transport object
    console.log(recruiterComment)
    let info = await transporter.sendMail({
      from: '"Bumeran Select" <plataforma5Navent@gmail.com>', // sender address
      to: email,
      subject: `La Busqueda ${title} ha sido cerrada`, // Subject line
      // text: 'Resumen de la orden', // plain textbody
      html: `<div>
            <h1>Hola ${name} ${surname},  la busqueda ${title} ha sido cerrada!</h1>
            <h2>La empresa ${company} te ha dejado la siguiente calificacion de: ${rating}</h2>
            <h2>con un comentario: </h2>
            <p>${recruiterComment}</p>      
       
            <h5> Muchas gracias por participar!</h5>
            <hr/>
        </div>`, // html body
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { AssignRecruiter, CloseJobSendEmail }
