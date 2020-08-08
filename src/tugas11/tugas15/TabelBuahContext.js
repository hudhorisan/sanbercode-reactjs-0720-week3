import React, {createContext, useState} from 'react'
import Axios from 'axios';

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [dataBuah,setDataBuah] = useState(null)
    if (dataBuah === null){
        Axios
            .get('http://backendexample.sanbercloud.com/api/fruits')
            .then((res)=>{
                setDataBuah(res.data.map((el)=>{
                    return {id:el.id, nama:el.name,harga:el.price,berat:el.weight}
                }))
            })
    } console.log(dataBuah)
    const [inputNama,setInputNama] = useState("");
    const [inputBerat,setInputBerat] = useState("");
    const [inputHarga,setInputHarga] = useState("")
    const [statusForm,setStatusForm] = useState("create")
    const [selectedID,setSelectedID] = useState(0)

    const handleUbah = (event) => {
        let idBuah = parseInt(event.target.value)
        let data = dataBuah.find(el=>el.id === idBuah) 
        let nama = data.nama
        let harga = data.harga
        let berat = data.berat
        setInputNama(nama)
        setInputHarga(harga)
        setInputBerat(berat)
        setStatusForm("edit")
        setSelectedID(idBuah)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        let nama = inputNama
        let harga = inputHarga
        let berat = inputBerat
        if (statusForm === "create") {
            Axios
                .post('http://backendexample.sanbercloud.com/api/fruits',
                {name:nama,price:harga,weight:berat})
                .then((res)=>{
                    setDataBuah([...dataBuah,{id:res.data.id,nama:nama,harga:harga,berat:berat}])
                })
            setInputNama("")
            setInputHarga("")
            setInputBerat("")
        } else {
            Axios
                .put(`http://backendexample.sanbercloud.com/api/fruits/${selectedID}`,
                {name:nama,price:harga,weight:berat})
                .then(()=>{
                    let buah = dataBuah.find(x=>x.id===selectedID)
                    buah.nama = nama
                    buah.harga = harga
                    buah.berat = berat
                    setDataBuah([...dataBuah])
                })

            setInputNama("")
            setInputHarga("")
            setInputBerat("")
            setStatusForm("create")
        }
        
    }

    const handleHapus = (event) => {
        let idBuah = parseInt(event.target.value)
        let dataBaru = dataBuah.filter(x=>x.id !== idBuah)
        Axios
            .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
            .then((res)=>{
                console.log(res.data)
            })
        setDataBuah(dataBaru)
    }

    const value = [
        dataBuah,
        inputNama,setInputNama,
        inputBerat,setInputBerat,
        inputHarga,setInputHarga,
        handleUbah,handleSubmit,handleHapus
    ]

    return (
        <BuahContext.Provider value={value}>
            {props.children}
        </BuahContext.Provider>
    )

}