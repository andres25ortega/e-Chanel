let aux = [];
const boton = document.getElementById('boton');
const input = document.getElementById('input');
const formulario = document.getElementById('formulario');

const buscador = [
    { cadena: 'acerca de nosotros', id: 'nosotros' },
    { cadena: 'acerca', id: 'nosotros' },
    { cadena: 'nosotros', id: 'nosotros'},
    { cadena: 'hacemos', id: 'nosotros' },
    { cadena: 'ventas', id: 'nosotros'},
    { cadena: 'generar', id: 'nosotros' },
    { cadena: 'resultados', id: 'nosotros'},
    { cadena: 'generamos ventas', id: 'nosotros' },
    { cadena: 'generamos prospecto de calidad', id: 'nosotros'},
    { cadena: 'calidad', id: 'nosotros' },
    { cadena: 'mejorar resultados', id: 'nosotros'},
    { cadena: 'inteligencia artificial', id: 'nosotros' },
    { cadena: 'prospecto de calidad', id: 'nosotros'},
    { cadena: 'inteligencia', id: 'nosotros' },
    
    { cadena: 'somos diferentes', id: 'SomosDiferentes' },
    { cadena: 'somos', id: 'SomosDiferentes' },
    { cadena: 'diferentes', id: 'SomosDiferentes' },
    { cadena: 'agencia digital', id: 'SomosDiferentes' },
    { cadena: 'agencia', id: 'SomosDiferentes' },
    { cadena: 'digital', id: 'SomosDiferentes' },

    { cadena: 'ceo', id: 'equipo' },
    { cadena: 'gerente general', id: 'equipo' },
    { cadena: 'gerente', id: 'equipo' },
    { cadena: 'general', id: 'equipo' },
    { cadena: 'directora de operaciones', id: 'equipo' },
    { cadena: 'directora', id: 'equipo' },
    { cadena: 'operaciones', id: 'equipo' },
    { cadena: 'directora de marketing digital', id: 'equipo' },
    { cadena: 'marketing digital', id: 'equipo' },
    { cadena: 'directora comercial y mercadeo', id: 'equipo' },
    { cadena: 'comercial', id: 'equipo' },
    { cadena: 'mercadeo', id: 'equipo' },
    { cadena: 'gerente comercial', id: 'equipo' },
    { cadena: 'lead ratings', id: 'equipo' },
    { cadena: 'lead', id: 'equipo' },
    { cadena: 'ratings', id: 'equipo' },
    { cadena: 'directora de nuevos proyectos', id: 'equipo' },
    { cadena: 'nuevos proyectos', id: 'equipo' },
    { cadena: 'proyectos', id: 'equipo' },
    { cadena: 'coordinadora de mercadeo', id: 'equipo' },
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