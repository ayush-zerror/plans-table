import React, { useState } from 'react'
import { MdAdd } from "react-icons/md";
import Table from './Table';

const TableContainer = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div id='table-container'>
            <div className="full-list-btn" onClick={()=>setIsOpen(!isOpen)}>
                <MdAdd /><span> Full list of features</span>
            </div>
            {
                isOpen && <div id='table-wrapper' className='bg-gradient-to-b from-[#F4FAFE] to-[#F9FEFF00]'>
                    <h2 id='title-table'>Compare all plan features</h2>
                    <Table />
                </div>
            }
        </div>
    )
}

export default TableContainer