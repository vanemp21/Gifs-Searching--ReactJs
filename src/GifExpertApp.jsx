import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {
  //Por defecto sale pokmemon y onepunch man, categories es
  //una categoria, posicion del array y setcategories la funcion
  //que hara algo sobre categories
  const [categories, setCategories] = useState(['Pokemon']);

  //Función que añadirá al array el nuevo valor
  //esta funcion se llama luego en el prop de la etiqueta addcategory
  const onAddCategory = (newCategory) => {
    //si la categoria existe no hagas nada, si no insertalo
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
    //console.log('Valorant')
  }
  return (
    <>
      {/*XAV5j8eUgv0YZbEhq6Krd29sxO8gik9x*/}
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)}/>
      {/*Recorre el array de categories y lo muestra*/}
      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))
      }


    </>
  )
}
