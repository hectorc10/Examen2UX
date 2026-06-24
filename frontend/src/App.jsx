import { useState } from "react";

export default function App() {
  const [citas, setCitas] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [form, setForm] = useState({ doctorName: "", especialidad: "", tipoConsulta: "", pacienteId: "" });

  const getCitas = async () => {
    const res = await fetch("http://localhost:3000/api/citas");
    const data = await res.json();
    setCitas(data.data || []);
  };

  const createCita = async () => {
    const res = await fetch("http://localhost:3000/api/citas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    if (res.status === 201) {
      setMensaje("✅ Cita creada correctamente");
      setShowForm(false);
      setForm({ doctorName: "", especialidad: "", tipoConsulta: "", pacienteId: "" });
    } else {
      setMensaje("❌ Error al crear la cita");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sistema de Citas Clínicas</h1>

      <button onClick={getCitas}>Ver Citas</button>
      <button onClick={() => setShowForm(true)} style={{ marginLeft: "1rem" }}>Crear Cita</button>

      {mensaje && <p>{mensaje}</p>}

      {showForm && (
        <div>
          <h2>Nueva Cita</h2>
          <input placeholder="Doctor" value={form.doctorName} onChange={e => setForm({ ...form, doctorName: e.target.value })} /><br />
          <input placeholder="Especialidad" value={form.especialidad} onChange={e => setForm({ ...form, especialidad: e.target.value })} /><br />
          <input placeholder="Tipo de Consulta" value={form.tipoConsulta} onChange={e => setForm({ ...form, tipoConsulta: e.target.value })} /><br />
          <input placeholder="Paciente ID" value={form.pacienteId} onChange={e => setForm({ ...form, pacienteId: e.target.value })} /><br />
          <button onClick={createCita}>Guardar</button>
          <button onClick={() => setShowForm(false)} style={{ marginLeft: "1rem" }}>Cancelar</button>
        </div>
      )}

      {citas.length > 0 && (
        <ul>
          {citas.map(c => (
            <li key={c.id}>
              <b>{c.doctorName}</b> — {c.especialidad} — {c.tipoConsulta}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}