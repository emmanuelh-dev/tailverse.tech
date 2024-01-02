export function historyBackOrHome() {
  // Verifica si hay una página anterior en el historial
  if (window.history.length > 1) {
    // Obtiene la URL de la página anterior
    const urlPaginaAnterior = document.referrer;

    // Verifica si la URL de la página anterior es de tu aplicación
    if (urlPaginaAnterior.includes("url-de-tu-app")) {
      // Si es de tu aplicación, regresa a la página anterior
      window.history.back();
    } else {
      // Si no es de tu aplicación, redirige al inicio de tu aplicación
      window.location.href = "/";
    }
  } else {
    // Si no hay página anterior en el historial, redirige al inicio de tu aplicación
    window.location.href = "/";
  }
}
