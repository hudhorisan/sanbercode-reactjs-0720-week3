import React from 'react'
import {BuahProvider} from './TabelBuahContext'
import TabelBuah from './TabelBuah'

const Buah = () => {
    return (
        <BuahProvider>
            <TabelBuah />
        </BuahProvider>
    )
}

export default Buah