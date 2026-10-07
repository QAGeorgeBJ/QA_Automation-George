// Interface para representar un caso de test
interface CasoDeTest {
    id: number;
    titulo: string;
    prioridad: string;
    ejecutado: boolean;
}
// Array de casos de test
const listaCasos: CasoDeTest[] = [
    { id: 1,
        titulo: "Validar inicio de sesion exitoso",
        prioridad: "Alta",
        ejecutado: true
    },
    { id: 2,
        titulo: "Validar registro con correo existente",
        prioridad: "Media",
        ejecutado: false    
    },
    { id: 3,
        titulo: "Validar recuperacion de contraseña",
        prioridad: "Baja",
        ejecutado: true 
    }
];
// FUncin obtenerCasosDeTest con promise + setTimeout (500ms)
function obtenerCasosDeTest(): Promise<CasoDeTest[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaCasos);
        }, 500);
    });
}
//funcion async main con await y foreach
async function main(): Promise<void> {
    console.log("Cargando casos de test desde el servidor...");
    const casos = await obtenerCasosDeTest();
    casos.forEach(caso => {
        console.log(formatearCaso(caso));
    });
}
//funcion formatearCaso
function formatearCaso(caso: CasoDeTest): string {
    const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";
    return `[ID: ${caso.id}]: ${caso.titulo} | Prioridad: ${caso.prioridad} | Estado: ${estado}`;
}
//ejecutar la funcion main
main();