let aux = [];
const boton = document.getElementById('boton');
const input = document.getElementById('input');
const formulario = document.getElementById('formulario');

const buscador = [    
    { cadena: 'productos', id: 'solucionProductos'},
    { cadena: 'solucion', id: 'solucionProductos'},
    { cadena: 'solución end to end', id: 'solucionProductos'},
    { cadena: 'end to end', id: 'solucionProductos'},
    { cadena: 'end', id: 'solucionProductos'},

    { cadena: 'analítica predictiva', id: 'analiticaPredictiva'},
    { cadena: 'analitica predictiva', id: 'analiticaPredictiva'},
    { cadena: 'analitica', id: 'analiticaPredictiva'},
    { cadena: 'predictiva', id: 'analiticaPredictiva'},
    { cadena: 'conversion', id: 'analiticaPredictiva'},
    { cadena: 'conversión', id: 'analiticaPredictiva'},
    { cadena: 'fidelización', id: 'analiticaPredictiva'},
    { cadena: 'fidelizacion', id: 'analiticaPredictiva'},
    { cadena: 'retención', id: 'analiticaPredictiva'},
    { cadena: 'retencion', id: 'analiticaPredictiva'},
    { cadena: 'lead', id: 'analiticaPredictiva'},
    { cadena: 'customer', id: 'analiticaPredictiva'},
    { cadena: 'ratings', id: 'analiticaPredictiva'},
    { cadena: 'churn', id: 'analiticaPredictiva'},
    { cadena: 'aumentar ventas', id: 'analiticaPredictiva'},
    { cadena: 'aumentar clv', id: 'analiticaPredictiva'},
    { cadena: 'lead ratings', id: 'analiticaPredictiva'},
    { cadena: 'customer ratings', id: 'analiticaPredictiva'},
    { cadena: 'ratings ratings', id: 'analiticaPredictiva'},
    { cadena: 'churn ratings', id: 'analiticaPredictiva'},
    { cadena: 'ventas', id: 'analiticaPredictiva'},
    { cadena: 'clv', id: 'analiticaPredictiva'},

    { cadena: 'perfilamos al prospecto', id: 'perfilamosProspecto'},
    { cadena: 'perfilamos', id: 'perfilamosProspecto'},
    { cadena: 'prospecto', id: 'perfilamosProspecto'},
    { cadena: 'lead scoring', id: 'perfilamosProspecto'},
    { cadena: 'mail automatico', id: 'perfilamosProspecto'},
    { cadena: 'mail', id: 'perfilamosProspecto'},
    { cadena: 'autogestion', id: 'perfilamosProspecto'},
    { cadena: 'autogestión', id: 'perfilamosProspecto'},
    { cadena: 'contacto', id: 'perfilamosProspecto'},
    { cadena: 'contacto inmediato', id: 'perfilamosProspecto'},

    { cadena: 'prospectos de calidad', id: 'prospectoCalidad'},
    { cadena: 'prospectos', id: 'prospectoCalidad'},    
    { cadena: 'calidad', id: 'prospectoCalidad'},     
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