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

// .container {
//       background-color: red;
//     }
//     .title {
//       font-size: 1rem;
//     }
//     h2 {
//       font-size: 0.9rem;
//     }
//     span {
//       font-weight: 400;
//     }
async function AssignRecruiter(recruiter, job) {
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Bumeran Selecta" <plataforma5Navent@gmail.com>', // sender address
      to: recruiter.email,
      subject: 'Nueva busqueda asignada', // Subject line
      // text: 'Resumen de la orden', // plain textbody
      html: `
      <html ⚡4email>
      <head>
      <style>
      .title {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
        text-decoration: underline;
      }
      h2 {
        font-size: 0.9rem;
      }
      span {
        font-weight: 400;
      }
      .footer {
        display: flex;
        height: 100px;
        background: #3f51b5;
        justify-content: flex-start;
        align-items: center;
      }
      .img {
        height: 150px;
      }
      .footertitle {
        font-size: 1rem;
        margin-left: 50px;
        color: white;
      }
      </style>
    </head>

    <body>
    <div class="container">
      <h1 class="title">
        Hola ${recruiter.name} ${recruiter.surname}, ¡Te han asignado una
        nueva busqueda, Felicitaciones!
      </h1>
      <p>Aca te dejamos el detalle de la misma:</p>
      <h2>Busqueda: <span>${job.title}</span></h2>
      <h2>Salario: $<span>${job.salary || 'No especificado'}</span></h2>
      <h2>Estado: <span>${job.isOpen}</span></h2>
      <h2>Descripcion: <span>${job.description}</span></h2>
      <hr />
      <h3>
        Por favor envia los candidatos presentados y la informacion a tu
        contacto de Bumeran Selecta
      </h3>
      <hr />
    </div>
    <div class="footer">           
      <h1 class="footertitle"> Bumeran Selecta - Cambiando la forma de contratar</h1>
    </div>
  </body>
  </html>

      `, // html body
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
    let info = await transporter.sendMail({
      from: '"Bumeran Selecta" <plataforma5Navent@gmail.com>', // sender address
      to: email,
      subject: `La Busqueda ${title} ha sido cerrada`, // Subject line
      // text: 'Resumen de la orden', // plain textbody
      html: `<html ⚡4email>
  <head>
    <style>
      .title {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
      h2 {
        font-size: 0.9rem;
      }
      span {
        font-weight: 400;
      }
      .footer {
        display: flex;
        height: 100px;
        background: #3f51b5;
        justify-content: flex-start;
        align-items: center;
      }
      .img {
        height: 150px;
      }
      .footertitle {
        font-size: 1rem;
        margin-left: 50px;
        color: white;
      }
    </style>
  </head>

  <body>
    <div>
      <h1 class="title">
        Hola ${name} ${surname}, la busqueda ${title} ha sido cerrada!
      </h1>
      <h2>
        La empresa ${company} te ha dejado la  calificacion de  ${rating} con el siguiente comentario:</h2>
      <p>${recruiterComment}</p>
      <hr />
      <h3>
        Muchas gracias por haber participado en el proceso de seleccion de
        Bumeran Selecta!
      </h3>
      <hr />
    </div>
    <div class="footer">
      <h1 class="footertitle">
        Bumeran Selecta - Cambiando la forma de contratar
      </h1>
    </div>    
   </body>
</html>      
      `, // html body
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { AssignRecruiter, CloseJobSendEmail }
