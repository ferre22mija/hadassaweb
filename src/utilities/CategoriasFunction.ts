export const SubcategoriasSelect= (categorias:any[],idpadre:number|null)=>{
    return categorias.filter((categoria)=>categoria.padre === idpadre)
}