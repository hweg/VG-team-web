const { json } = require("micro");

const sendMail = require("./send-mail"); // Aquí debes agregar tu código para enviar el correo electrónico

module.exports = async (req, res) => {
  try {
    const data = await json(req);
    console.log(data); // Aquí puedes imprimir los datos que recibes del formulario
    await sendMail(data); // Aquí llamas a la función que envía el correo electrónico
    res.status(200).send("Formulario enviado correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al enviar el formulario");
  }
};
