'use client'

import { ChangeEvent, useState } from "react"

export default function CalcImc() {
    const [dataForm, setDataForm] = useState ({
        peso: '',
        altura: '',
    })
    const [resultado, setResultado] = useState(0)

    const handleClick = () => {
        const alturaMetros = Number(dataForm.altura) / 100
        const result = Number(dataForm.peso) / (alturaMetros ** 2)

        setResultado(Number(result.toFixed(2)))
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        const {id, value} = event.target

        setDataForm({...dataForm, [id]:value})
    }


    return (
        <div>
            <label htmlFor="altura">Altura</label>
            <input onChange={handleChange} id="altura" value={dataForm.altura} type="number" placeholder="Digite sua Altura em CM" />
            <label htmlFor="altura">Peso</label>
            <input onChange={handleChange} id="peso"  value={dataForm.peso} type="number" placeholder="Digite sua seu peso em KG" />

            <p>Seu IMC é de: {resultado}</p>

            <button onClick={handleClick}>Calcular IMC</button>
        </div>
    )
}