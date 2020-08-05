import React from 'react'
import './TabelBuah.css'

class TabelBuah extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataHargaBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
              ],
            inputNama:"",
            inputHarga:"",
            inputBerat:"",
            index:-1  
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBeratChange = this.handleBeratChange.bind(this)
        this.handleHargaChange = this.handleHargaChange.bind(this)
        this.handleNamaChange = this.handleNamaChange.bind(this)
        this.handleHapus = this.handleHapus.bind(this)
        this.handleUbah = this.handleUbah.bind(this)

    }
    handleHapus(event){
        let dataBaru = this.state.dataHargaBuah
        dataBaru.splice(event.target.value,1)
        this.setState({
            dataHargaBuah:dataBaru
        })
    }

    handleUbah(event){
        this.setState({
            index:event.target.value,
            inputNama:this.state.dataHargaBuah[event.target.value].nama,
            inputHarga:this.state.dataHargaBuah[event.target.value].harga,
            inputBerat:this.state.dataHargaBuah[event.target.value].berat
        })
    }

    handleNamaChange(event){
        this.setState({inputNama:event.target.value})
    }

    handleHargaChange(event){
        this.setState({inputHarga:event.target.value})
    }

    handleBeratChange(event){
        this.setState({inputBerat:event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        if (this.state.index === -1) {
            let ini = this.state
            let dataBaru = [
                ...this.state.dataHargaBuah,
                {nama: ini.inputNama, harga: ini.inputHarga, berat: ini.inputBerat}
            ]
            this.setState({
                dataHargaBuah:dataBaru,
                inputNama:"",
                inputHarga:"",
                inputBerat:""
            })
        } else {
            let ini = this.state
            let dataBaru = ini.dataHargaBuah
            dataBaru[ini.index].nama = ini.inputNama
            dataBaru[ini.index].harga = ini.inputHarga
            dataBaru[ini.index].berat = ini.inputBerat
            this.setState({
                dataHargaBuah:dataBaru,
                inputNama:"",
                inputHarga:"",
                inputBerat:""
            })
        }
    }

    render() {
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
                    {this.state.dataHargaBuah.map((item,index)=>{
                        return (<tr key={index}>
                            <td>{item.nama}</td>
                            <td>{item.harga}</td>
                            <td>{item.berat/1000} kg</td>
                            <td><button onClick={this.handleUbah} value={index}>Ubah</button>
                            <button onClick={this.handleHapus} value={index}>Hapus</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <form onSubmit={this.handleSubmit}>
                <h2>Form Data Baru</h2>
                <label>Nama <input type="text" required
                onChange={this.handleNamaChange} value={this.state.inputNama} /></label>
                <label>Harga <input type="number" required
                onChange={this.handleHargaChange} value={this.state.inputHarga}/></label>
                <label>Berat(gram) <input type="number" required
                onChange={this.handleBeratChange} value={this.state.inputBerat}/></label>
                <input type="submit" />
            </form>
        </>);
    }
}

export default TabelBuah