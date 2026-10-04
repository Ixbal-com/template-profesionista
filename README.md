# Plantilla Ixbal · Profesionista

Plantilla para abogadas, contadores, consultores, arquitectas y profesionistas que atienden por cita. Estilo **corporativo sobrio**: azul marino y dorado, retícula formal y títulos en serif clásica (Libre Baskerville).

**Incluye:** hero oscuro con retrato enmarcado, franja de credenciales, áreas de práctica numeradas, trayectoria con cifras, foto panorámica del despacho con cita, proceso de trabajo, opiniones, preguntas frecuentes, horario con indicador de “Abierto ahora”, **formulario de consulta que se envía por WhatsApp** (sin servidor), mapa y datos estructurados de despacho para Google.

## Uso

```bash
npm run dev     # servidor local en http://localhost:4321
npm run check   # valida el sitio (sin dependencias)
```

También puedes abrir `index.html` con cualquier servidor estático. No requiere compilación.

## Personalizar

1. **Identidad:** colores y tipografía en `assets/css/tokens.css`.
2. **Contenido:** textos, credenciales y áreas de práctica en `index.html`, organizado por secciones.
3. **Imágenes:** la plantilla tiene 4 espacios de imagen listados en `imageSlots` de `template.json`, con fotos de ejemplo en `images/` generadas con IA (`gpt-image-2.5-sunburst`). Reemplázalas por fotos reales; ver [AGENTS.md](AGENTS.md#espacios-de-imagen).

Las reglas de arquitectura y la lista de datos que se repiten están en [AGENTS.md](AGENTS.md).

## Publicar

Es un sitio estático: sirve la raíz del repositorio en GitHub Pages, Netlify, Vercel o AWS Amplify.

> Antes de publicar, convierte `assets/img/og-image.svg` a PNG de 1200 × 630 y usa una URL absoluta en `og:image`: WhatsApp y Facebook no muestran vistas previas en SVG.
