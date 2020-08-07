import React,{useState,useEffect} from 'react'
import './TabelBuah.css'
import Axios from 'axios';

const TabelBuah = ()=>{
    const [dataBuah,setDataBuah] = useState(null);

    const [inputNama,setInputNama] = useState("");
    const [inputBerat,setInputBerat] = useState("");
    const [inputHarga,setInputHarga] = useState("")
    const [indexOfForm,setIndexOfForm] = useState(-1);

    const handleNamaChange = (event)=> {setInputNama(event.target.value)}
    const handleHargaChange = (event)=> {setInputHarga(event.target.value)}
    const handleBeratChange = (event) => {setInputBerat(event.target.value)}
    const handleUbah = (event) => {
        let i = event.target.value
        let nama = dataBuah[i].nama
        let harga = dataBuah[i].harga
        let berat = dataBuah[i].berat
        setInputNama(nama)
        setInputHarga(harga)
        setInputBerat(berat)
        setIndexOfForm(i)
        console.log(inputNama)
    }
    const handleHapus = (event) => {
        let dataBaru = dataBuah
        dataBaru.splice(event.target.value,1)
        setDataBuah(dataBaru)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (indexOfForm === -1) {
        let dataBaru = [...dataBuah,{nama:inputNama,harga:inputHarga,berat:inputBerat}]
        setDataBuah(dataBaru)
        setInputNama("")
        setInputHarga("")
        setInputBerat("")
        } else {
            let dataBaru = dataBuah
            dataBaru[indexOfForm].nama = inputNama
            dataBaru[indexOfForm].harga = inputHarga
            dataBaru[indexOfForm].berat = inputBerat
            setDataBuah(dataBaru)
            setInputNama("")
            setInputHarga("")
            setInputBerat("")
            setIndexOfForm(-1) 
        }
        
    }

    useEffect(()=>{
        if (dataBuah === null) {
            Axios.get('http://backendexample.sanbercloud.com/api/fruits')
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
    })

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
                    {dataBuah.map((item,index)=>{
                        return (<tr key={index}>
                            <td>{item.nama}</td>
                            <td>{item.harga}</td>
                            <td>{item.berat/1000} kg</td>
                            <td><button onClick={handleUbah} value={index}>Ubah</button>
                            <button onClick={handleHapus} value={index}>Hapus</button></td>
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

export default TabelBuah