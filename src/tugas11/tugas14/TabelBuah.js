import React,{useState,useEffect} from 'react'
import './TabelBuah.css'
import Axios from 'axios';

const TabelBuah4 = ()=>{
    const [dataBuah,setDataBuah] = useState(null);

    const [inputNama,setInputNama] = useState("");
    const [inputBerat,setInputBerat] = useState("");
    const [inputHarga,setInputHarga] = useState("")
    const [indexOfForm,setIndexOfForm] = useState(-1);
    const [statusForm,setStatusForm] = useState("create")
    const [selectedID,setSelectedID] = useState(0)

    useEffect(()=>{
        if (dataBuah === null) {
            Axios.get('http://backendexample.sanbercloud.com/api/fruits')
            .then((res)=>{
                setDataBuah(res.data.map((el)=>{
                    return {id:el.id,nama:el.name,harga:el.price,berat:el.weight}                    
                }))
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
    })
    

    const handleNamaChange = (event)=> {setInputNama(event.target.value)}
    const handleHargaChange = (event)=> {setInputHarga(event.target.value)}
    const handleBeratChange = (event) => {setInputBerat(event.target.value)}

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
    const handleHapus = (event) => {
        let idBuah = parseInt(event.target.value)
        let dataBaru = dataBuah.filter(x=>x.id !== idBuah)
        Axios
            .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
            .then((res)=>{
                console.log(res)
            })
        setDataBuah(dataBaru)
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

   

    return (
        <>
            <h1>Tabel Harga Buah</h1>
            <table>
                
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {(dataBuah !== null) && 
                    dataBuah
                    .map((item,index)=>{
                        return (<tr key={index}>
                            <td>{item.nama}</td>
                            <td>{item.harga}</td>
                            <td>{item.berat/1000} kg</td>
                            <td><button onClick={handleUbah} value={item.id}>Ubah</button>
                            <button onClick={handleHapus} value={item.id}>Hapus</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <h2>Form Data Baru</h2>
                <label>Nama <input type="text" required
                onChange={handleNamaChange} value={inputNama} /></label>
                <label>Harga <input type="number" required
                onChange={handleHargaChange} value={inputHarga}/></label>
                <label>Berat(gram) <input type="number" required
                onChange={handleBeratChange} value={inputBerat}/></label>
                <input type="submit" />
            </form>
        </>);
}

export default TabelBuah4