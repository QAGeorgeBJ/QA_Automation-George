//interfaz
interface CasoPrueba {
  id: number;
  titulo: string;
  prioridad: string "alta" | "media" | "baja";
  ejecutado: boolean;
}
//Array de casos de prueba
const casosDePrueba: CasoPrueba [] = [
   {id: 1,
    titulo: "Verificar que el usuario pueda iniciar sesión con credenciales válidas",
    prioridad: "alta",
    ejecutado: true},
    {id: 2,
    titulo: "Verificar que el usuario pueda cerrar sesión correctamente",
    prioridad: "media",
    ejecutado: false},
    {id: 3,
    titulo: "Verificar que el usuario pueda cambiar su contraseña",
    prioridad: "baja",
    ejecutado: false},
    {id: 4,
    titulo: "Carga de imagen de perfil de gran tamaño",
    prioridad: "baja",
    ejecutado: true},
    {id: 5,
    titulo: "Verificar que el usuario pueda eliminar su cuenta",
    prioridad: "alta",
    ejecutado: false}
];
//contar los casos de prueba por prioridad
function contarPorPrioridad(casos: CasoPrueba[]) {
    const resultado = {
        alta: 0,
        media: 0,
        baja: 0
    };
    casos.forEach(caso => {
        resultado[caso.prioridad] += 1;
    });
    return resultado;
}
//pendientes de ejecución
function listarPendientes(casos: CasoPrueba): string => {
    const estado = casos.ejecutado ? "Ejecutado" : "Pendiente";
    return `#${casos.id} - ${casos.titulo} - ${casos.titulo} - Estado: ${estado}`;
};
//formatear la salida de los casos de prueba pendientes
    const formatearCaso = (caso: CasoPrueba): string => {
    const estado = casos.ejecutado ? "Ejecutado" : "Pendiente";
    return `#${casos.id} - ${casos.titulo} - ${casos.titulo} - Estado: ${estado}`;
};
//imprimir resultados
console.log("Cantidad de casos de prueba por prioridad:", contarPorPrioridad(casosDePrueba));
console.log("Casos de prueba pendientes de ejecución:");
//imprimir foreach de los casos de prueba pendientes
casosDePrueba.forEach(caso => {
    if (!caso.ejecutado) {  
        console.log(listarPendientes(caso));
    }
});
