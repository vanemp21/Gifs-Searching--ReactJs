import { useState } from "react"
//recibo del otro lado la funcion onnewcategory
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    /*const onInputChange = (event)=>{
      setInputValue(event.target.value);*/

      //Al cambiar el input por escribir, pilla el target y se le aplica
      //el valor del target a ese input
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    //el form tiene un onsubmit
    const onSubmit = (event) =>{
        event.preventDefault();//previente que se recargue
        const newInputvalue = inputValue.trim();//es el valor del input sin espacios del array del usestate
        if(newInputvalue.length<=1) return;//si tiene mas de 2 caracteres psa
        //funcion llamada que va a dar valor al nuevo input
        //onNewCategory={(value) => onAddCategory(value)}
        onNewCategory(newInputvalue);
        console.log(inputValue);
        //setCategories(categories=>[inputValue,...categories]);
        setInputValue('');//vaciar el input
    }
    return (
        <form onSubmit={ onSubmit }>
            <input type="text" placeholder="Buscar gifs" value={ inputValue } onChange={ onInputChange } />
        </form>
        //<input type="text"  placeholder="Buscar gifs" value={inputValue} onChange={(event)=>onInputChange(event)}/>
    )
}
