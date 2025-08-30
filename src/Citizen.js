export const ciudadanos = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    dni: "12345678",
    correoElectronico: "juan.perez@email.com",
    celular: "+54 9 341 1234567",
    incidencias: [
      {
        id: 1,
        fechaIngreso: "2025-08-29",
        tipo: "Luz",
        estado: "Started",
        observacion: "Falla intermitente",
        area: "Mantenimiento",
        operador: "Pedro",
        acciones: "Revisar instalación"
      },
      {
        id: 2,
        fechaIngreso: "2025-08-28",
        tipo: "Agua",
        estado: "InProgress",
        observacion: "Baja presión",
        area: "Servicios",
        operador: "María",
        acciones: "Enviar técnico"
      }
    ]
  },
  {
    nombre: "María",
    apellido: "Gómez",
    dni: "87654321",
    correoElectronico: "maria.gomez@email.com",
    celular: "+54 9 341 7654321",
    incidencias: [
      {
        id: 3,
        fechaIngreso: "2025-08-27",
        tipo: "Calles",
        estado: "Done",
        observacion: "Bache reparado",
        area: "Obras",
        operador: "Carlos",
        acciones: "Cerrar incidencia"
      }
    ]
  }
];
