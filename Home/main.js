let aux = [];
const boton = document.getElementById('boton');
const input = document.getElementById('input');
const formulario = document.getElementById('formulario');

const buscador = [
    { cadena: 'productos', id: 'productosHome' },
    { cadena: 'solucion', id: 'productosHome'},
    { cadena: 'solución end to end', id: 'productosHome'},
    { cadena: 'end to end', id: 'productosHome'},
    { cadena: 'end', id: 'productosHome'},
    { cadena: 'analítica predictiva', id: 'productosHome'},
    { cadena: 'analitica', id: 'productosHome'},
    { cadena: 'predictiva', id: 'productosHome'},
    { cadena: 'prospectos de calidad', id: 'productosHome'},
    { cadena: 'prospectos', id: 'productosHome'},    
    { cadena: 'calidad', id: 'productosHome'},
    
    { cadena: 'video', id: 'videoHome'},

    { cadena: 'nosotros', id: 'nosotrosHome'},
    { cadena: 'aliado', id: 'nosotrosHome'},
    { cadena: 'equipo', id: 'nosotrosHome'},

    { cadena: 'experiencia', id: 'experienciaHome'},
    { cadena: '20 años', id: 'experienciaHome'},
    { cadena: 'años', id: 'experienciaHome'},
    
    { cadena: 'solucion', id: 'solucionProductos'},
    { cadena: 'solución end to end', id: 'solucionProductos'},
    { cadena: 'end to end', id: 'solucionProductos'},
    { cadena: 'end', id: 'solucionProductos'},
    { cadena: 'analítica predictiva', id: 'solucionProductos'},
    { cadena: 'analitica', id: 'solucionProductos'},
    { cadena: 'predictiva', id: 'solucionProductos'},
]

boton.addEventListener('click', (e) => {
    formulario.action = "#";
    aux = [];
    palabraBuscada = input.value.toLowerCase();
    const result = buscador.filter(filtro => filtro.cadena == palabraBuscada);    
    if(result.length != 0){
        if (result[0].cadena == palabraBuscada) {
            result.forEach(element => {
                aux.push(
                    element.cadena,
                    element.id
                )
            });               
            formulario.action =  formulario.action + aux[1]; 
        }   
    }else{
        alert('No se ha encontrado tú palabra, intenta nuevamente con otra')
    }   
})