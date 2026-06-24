const { cita, paciente } = require("../models");

let getCitas = async (req, res) => {
  try {
    let citas = await cita.findAll();

    if (citas.length <= 0) {
      return res.status(204).json({ status: 204, message: "No hay citas" });
    }

    res.status(200).json({ status: 200, data: citas });

  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

let createCita = async (req, res) => {
  try {
    const { doctorName, especialidad, tipoConsulta, pacienteId } = req.body;

    const pac = await paciente.findByPk(pacienteId);
    if (!pac) {
      return res.status(404).json({ status: 404, message: "Paciente no encontrado" });
    }

    const newCita = await cita.create({ doctorName, especialidad, tipoConsulta, pacienteId });

    res.status(201).json({ status: 201, data: newCita });

  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { getCitas, createCita };