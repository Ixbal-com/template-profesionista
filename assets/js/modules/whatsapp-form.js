// Formulario de consulta sin servidor: arma un mensaje con los campos y lo abre en
// WhatsApp. El número se toma del primer enlace [data-contact="whatsapp"] de la
// página, así que solo existe en un lugar.
export function initWhatsappForm() {
  const form = document.querySelector("[data-whatsapp-form]");
  const link = document.querySelector('[data-contact="whatsapp"]');
  if (!form || !link) return;

  const phone = new URL(link.href).pathname.replace(/\D/g, "");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      `Hola, soy ${data.get("nombre")}.`,
      `Quiero agendar una consulta sobre: ${data.get("tema")}.`,
      data.get("mensaje")?.trim(),
    ].filter(Boolean);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
}
