/* CONFIG editable de fratellitesta.cl. Cambiar solo aqui. */
var CONFIG = {
  horario: 'Lunes a viernes, 8:00 a 18:00',
  horarioCorto: 'Lun a Vie, 8:00 a 18:00',
  garantia: 'Trabajos garantizados.',
  desde: '2012',

  /* ---------- SECCIONES APAGADAS (no se publican) ---------- */

  /* Opiniones: PENDIENTE. Cargar resenas REALES de Google, solo positivas, texto LITERAL sin retocar,
     y poner mostrarOpiniones:true. No mostrar nota ni cifras globales. */
  mostrarOpiniones: false,
  resenas: [
    /* {texto:'...', autor:'Nombre', fecha:'mes anio'} */
  ],

  /* Velocidad: PENDIENTE de respaldo. La CMF publica tiempos por compania, no por taller, y no hay ranking
     de talleres de la CMF. No activar sin fuente. */
  mostrarVelocidad: false,
  claimVelocidad: 'Estamos entre los talleres más rápidos de Chile, según las mediciones de la CMF.',
  /* Alternativo: defendible solo si la medicion propia usa la misma definicion que la CMF
     (tramo ingreso a disponible para retiro) y queda por debajo del promedio del tramo. */
  claimAlternativo: 'Reparamos y entregamos más rápido que el promedio de la industria publicado por la CMF.',
  usarClaimAlternativo: false
};
