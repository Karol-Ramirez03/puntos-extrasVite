import './data/productos.json'
const contenedorTabla = document.getElementById('app')
let herramientas = []
document.addEventListener('DOMContentLoaded', async (e) => {
    herramientas= await loadData()
    console.log(herramientas)
    herramientas.forEach(element => {
        contenedorTabla.insertAdjacentHTML('beforeend',`
        <tr>
          <td>${element.code_product}</td>
          <td>${element.gama}</td>
          <td>${element.stock}</td>
        </tr>`)
    });
})
async function loadData(){
    const response = await fetch('./data/productos.json')
    let producto = await response.json()
    console.log(producto)
    

    let nuevosProductos = producto.filter(product => product.stock <= 15 && product.gama === 'Herramientas')
    console.log(nuevosProductos)
    return nuevosProductos
}