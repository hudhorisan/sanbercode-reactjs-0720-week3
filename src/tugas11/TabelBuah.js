import React from 'react'
import './TabelBuah.css'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

let renderTableHeader = ()=>{
    let header = Object.keys(dataHargaBuah[0]);
    return header.map((key)=>{
        key = key.substr(0,1).toUpperCase()+key.substring(1)
        return <th>{key}</th> 
    })
}
  


let renderTableData = ()=>{
    return dataHargaBuah.map((data)=>{
        const {nama,harga,berat} = data
        return <tr>
            <td>{nama}</td>
            <td>{harga}</td>
            <td>{(berat/1000).toFixed(2)} kg</td>
        </tr>
    })
} 


function TabelBuah(){
    return (
        <div className="tabelKomponen">
            <h1>Tabel Harga Buah</h1>
            <table>
                <thead>
                    {renderTableHeader()}
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    );
}

export default TabelBuah;
