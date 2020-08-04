import React from 'react'
import TimerMundur from './TimerMundur'
import './TabelBuah.css'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

// Versi menggunakan class Component

class Head extends React.Component {
    render() {
    return <th>{this.props.item}</th>;
    }
}

class Data extends React.Component {
    render() {
    return <tr>
        <td>{this.props.nama}</td>
        <td>{this.props.harga}</td>
        <td>{this.props.berat} kg</td>
    </tr>;
    }
}


class TabelBuah extends React.Component {
    render() {
        return <div className="card">
            <h1>Tabel Harga Buah</h1>
            <table>
                {Object.keys(dataHargaBuah[0]).map((item)=>{
                    return <Head item={item.substr(0,1).toUpperCase() + item.substring(1)}/>
                })}
                {dataHargaBuah.map((obj)=>{
                    return <Data nama={obj.nama} harga={obj.harga} berat={obj.berat/1000} />
                })}
            </table>        
            <TimerMundur start={100} />            
        </div>;
    }
}

export default TabelBuah;
