import React, { useState } from "react";

const usuarioDemo = {
  id: "u001",
  nombre: "Laura Méndez",
  email: "laura@empresa.com",
  cargo: "Analista de RRHH",
  perks: 2500,
  nivel: "Plata",
  historial: [
    { id: "r001", perk: "Café gratis", fecha: "2025-03-15", valor: 500 },
    { id: "r002", perk: "Media jornada", fecha: "2025-03-01", valor: 1200 }
  ]
};

const catalogoDemo = [
  { id: "p001", titulo: "Café gratis", costo: 500 },
  { id: "p002", titulo: "Media jornada", costo: 1200 }
];

const usuariosAdmin = [
  { nombre: "Laura Méndez", email: "laura@empresa.com", perks: 2500, nivel: "Plata" },
  { nombre: "Carlos Ruiz", email: "carlos@empresa.com", perks: 3800, nivel: "Oro" }
];

const App = () => {
  const [pantalla, setPantalla] = useState("inicio");

  const Menu = () => (
    <div style={{ padding: 10 }}>
      <h3><strong>Menú</strong></h3>
      <button onClick={() => setPantalla("inicio")}>🏠 Inicio</button><br />
      <button onClick={() => setPantalla("catalogo")}>🎁 Catálogo</button><br />
      <button onClick={() => setPantalla("perfil")}>👤 Perfil</button><br />
      <button onClick={() => setPantalla("historial")}>📜 Historial</button><br />
      <button onClick={() => setPantalla("admin")}>⚙️ Admin</button>
    </div>
  );

  const PantallaActual = () => {
    switch (pantalla) {
      case "inicio":
        return <div><h2>¡Hola, {usuarioDemo.nombre}!</h2><p>Tienes {usuarioDemo.perks} perks ⭐</p></div>;
      case "catalogo":
        return (
          <div>
            <h2>Catálogo de Perks</h2>
            <ul>
              {catalogoDemo.map(item => (
                <li key={item.id}>{item.titulo} - {item.costo} perks</li>
              ))}
            </ul>
          </div>
        );
      case "perfil":
        return (
          <div>
            <h2>Perfil</h2>
            <p>Nombre: {usuarioDemo.nombre}</p>
            <p>Email: {usuarioDemo.email}</p>
            <p>Cargo: {usuarioDemo.cargo}</p>
            <p>Perks: {usuarioDemo.perks}</p>
            <p>Nivel: {usuarioDemo.nivel}</p>
          </div>
        );
      case "historial":
        return (
          <div>
            <h2>Historial</h2>
            <ul>
              {usuarioDemo.historial.map(h => (
                <li key={h.id}>{h.perk} - {h.fecha} ({h.valor} perks)</li>
              ))}
            </ul>
          </div>
        );
      case "admin":
        return (
          <div>
            <h2>Panel de Administración</h2>
            <h3>Usuarios:</h3>
            <ul>
              {usuariosAdmin.map((u, i) => (
                <li key={i}>{u.nombre} ({u.email}) - {u.perks} perks - {u.nivel}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return <p>Pantalla no encontrada.</p>;
    }
  };

  return (
    <div style={{ display: "flex", gap: 30, padding: 20 }}>
      <Menu />
      <PantallaActual />
    </div>
  );
};

export default App;