# Mi placar

App personal para tener el placar a la vista: prendas con foto, composición, temporada y abrigo, outfits y medidas.

No depende de ningún servicio externo. Los datos (prendas, fotos, outfits, medidas) se guardan solo en el navegador del celular donde la uses. GitHub únicamente sirve los archivos de la app.

## Archivos

- `index.html`: la app completa.
- `manifest.json`, `icon-*.png`: para que se instale como app en el celular.
- `sw.js`: hace que funcione sin internet.

## Publicarla en GitHub Pages

1. Creá un repositorio nuevo (por ejemplo `placar`).
2. Subí todos estos archivos a la raíz del repo (Add file › Upload files).
3. Settings › Pages › Source: "Deploy from a branch", Branch: `main`, carpeta `/ (root)`. Guardá.
4. En uno o dos minutos queda en `https://TU-USUARIO.github.io/placar/`.

Ojo: en cuentas gratuitas GitHub Pages necesita que el repo sea público. Se ve el código, no tus datos.

## Instalarla en Android

1. Abrí el link en Chrome.
2. Menú ⋮ › "Instalar app" (o "Agregar a pantalla principal").

## Backup

Botón "Backup" arriba a la derecha del placar. Descarga un `.json` con todo, fotos incluidas. Guardalo fuera del celular (Drive, compu, mail). Si borrás los datos de Chrome, desinstalás la app o cambiás de teléfono, se restaura desde ese archivo.

## Si modificás la app

Cambiá `VERSION` en `sw.js` (por ejemplo `placar-v2`) y subí los dos archivos, así el celular toma la versión nueva.
