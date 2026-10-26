# Corrección — Sesión 2

**Archivo corregido:** `Ejercicios/Sesion2/casosTest.ts`

¡Muy buen trabajo! El archivo cumple con todos los puntos de la consigna y no tiene errores de tipos. Se nota el avance respecto de la sesión 1.

## Verificación

- `npx tsx casosTest.ts` → corre sin errores y, después de los 500ms, imprime los 3 casos formateados.
- Chequeo de tipos con `tsc --noEmit --strict` → sin errores.

## Lo que está bien

- La interface `CasoDeTest` tiene las cuatro propiedades con los tipos pedidos.
- El array está tipado con la interface y tiene 3 casos.
- `obtenerCasosDeTest()` devuelve `Promise<CasoDeTest[]>` y resuelve a los 500ms con `setTimeout`, tal como pedía la consigna.
- `main()` es `async`, hace `await` y recorre con `forEach` usando `formatearCaso`.
- Buen detalle el mensaje `"Cargando casos de test desde el servidor..."` antes del `await`: deja claro que hay una espera.
- `formatearCaso` usa el operador ternario y tiene el tipo de retorno declarado.

## Detalles menores

- Al repositorio le falta el setup del entorno: no tiene `package.json` (con las dependencias `typescript` y `tsx`) ni `tsconfig.json`. Sin ellos, `npx tsc --noEmit` no puede chequear los tipos del proyecto. Te los agrego yo directamente en el repo, así quedan igual que en el resto de los compañeros.
