import React from "react";
import './index.css'

const Input=({fields,inputValue})=>{

    const handleChange=(value,name)=>{
        console.log(value)

        inputValue(value,name)
    }
    return(
        <div className="inputConatiner">

            {
                fields.map((field)=>(
                    <div  className= {field.type==="checkbox"?"checkbox":"form"}>
                    <label className="label">{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} max={field.maxLength} defaultValue={field.value} maxLength={field.maxLength} className={field.type==="checkbox"?"checkbox":"Input"} name={field.name} onChange={field.type==='checkbox'?(e)=> handleChange(field.label,e.target.name):(e)=>handleChange(e.target.value,e.target.name)}/>
                    </div>

                ))
            }
        </div>
    )
}

export default Input;