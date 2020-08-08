import React, {useContext} from 'react'
import {BuahContext} from './TabelBuahContext'
import './TabelBuah.css'

const TabelBuah1 = ()=>{
    const [
        dataBuah,
        inputNama,setInputNama,
        inputBerat,setInputBerat,
        inputHarga,setInputHarga,
        handleUbah,handleSubmit,handleHapus
    ] = useContext(BuahContext);
    

    const handleNamaChange = (event)=> {setInputNama(event.target.value)}
    const handleHargaChange = (event)=> {setInputHarga(event.target.value)}
    const handleBeratChange = (event) => {setInputBerat(event.target.value)}


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

export default TabelBuah1