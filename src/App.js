import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <h1>
          Form Pembelian Buah
        </h1>
        <table>
          <tr>
            <th className="align-lb w-150">
              Nama Pelanggan
            </th>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <th className="align-lb w-150">
              Daftar Item
            </th>
            <td>
             <label className="item"><input type="checkbox"/>Semangka</label>
             <label className="item"><input type="checkbox"/>Jeruk</label>
             <label className="item"><input type="checkbox"/>Nanas</label>
             <label className="item"><input type="checkbox"/>Salak</label>
             <label className="item"><input type="checkbox"/>Anggur</label>
            </td>
          </tr>
        </table>
        <input type="submit" value="kirim" className="btn"/>
      </div>
    </div>
  );
}

export default App;
