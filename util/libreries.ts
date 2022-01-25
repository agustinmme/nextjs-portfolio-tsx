export const libreries = (value: string): string => {
  const DEFAULT_LIB = "Sin datos";
  const SELECT_LIBRERY: Record<string, string> = {
    formik:
      "La biblioteca de formularios de código abierto más popular del mundo para React y React Native.",
    yup: " un generador de esquemas de JavaScript para el análisis y la validación de valores.",
    paparse: " El analizador CSV, que permite parsear de csv a json y de json a cvs.",
    axios: "Un cliente HTTP basado en promesas para node.js y el navegador.",
    "redux thunk":
      "Un middleware de redux usado para retrasar el envío de una acción hasta que se cumpla una línea de código asíncrona.",
    jspdf: "Una biblioteca para generar archivos PDF en JavaScript.",
    jwt: "Es un estándar abierto que se utiliza para compartir información de segura entre un cliente y un servidor.",
    bcrypt: "Una biblioteca para ayudarte a codificar/hasing contraseñas.",
    nodemon:
      "Una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación del nodo cuando se detectan cambios en los archivos.",
    "react router":
      "Una colección de componentes de navegación la cual podemos usar como tanto en web o en mobile.",
    "react icons": "Una colección muy completa de iconos para react.",
    sweetalert: "Un hermoso reemplazo para la alerta de JavaScript",
    chatbot:
      "Una herramienta que proporciona una manera fácil de comenzar a crear chatbots con javascript.",
  };

  return SELECT_LIBRERY[value] || DEFAULT_LIB;
};
