export const EXAMPLES = {
  Paquetes: {
    title: "Paquetes",
    description:
      "Gestiona el envío de tus paquetes fácilmente. Ofrecemos una plataforma intuitiva para que puedas enviar, recibir y gestionar tus paquetes con solo unos clics. Aprovecha nuestras soluciones de paquetería flexibles, diseñadas para satisfacer todas tus necesidades logísticas, desde envíos estándar hasta opciones exprés.",
  },
  Rastrear: {
    title: "Rastrear",
    description:
      "Mantén un seguimiento en tiempo real de tus envíos con nuestra herramienta de rastreo. Solo necesitas el número de seguimiento para obtener la ubicación exacta de tu paquete y los detalles del estado de entrega. Nuestro sistema de rastreo actualiza la información constantemente para brindarte la tranquilidad que necesitas.",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  Actualizar: {
    title: "Actualizar",
    description:
      "Actualiza la información de tus envíos en cualquier momento. Ya sea que necesites cambiar la dirección de entrega, modificar el contenido del paquete o ajustar las opciones de envío, nuestra plataforma te permite hacerlo de manera sencilla y rápida. Garantiza que tus paquetes lleguen a su destino como lo planeaste.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  Agregar: {
    title: "Agregar",
    description:
      "Añade un nuevo paquete a tu lista de envíos de forma rápida y sencilla. Proporciona información crucial como la dirección de envío, el estado del paquete, y los datos del destinatario para asegurar una entrega precisa y a tiempo. Nuestra plataforma te guía a través de cada paso para que puedas estar seguro de que tu paquete está listo para su envío.",
    code: `
function AddPackage({ address, status, recipient }) {
  return (
    <div>
      <p>Dirección: {address}</p>
      <p>Estado: {status}</p>
      <p>Destinatario: {recipient}</p>
    </div>
  );
}`,
  },
};
