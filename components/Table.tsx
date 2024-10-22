'use client'
import { CategoryProps, ServiceProps } from '@/types'
import React, { useState } from 'react'

const Table = ({service}:CategoryProps) => {
    // console.log(service)
    const sortService = service.sort((a, b) => {
      return a.name.localeCompare(b.name); // Sort alphabetically by 'name'
    });
    const [showDev, setShowDev] = useState(true);
    const [showUAT, setShowUAT] = useState(true);
    const [showProd, setShowProd] = useState(true);
  return (
    <div className="overflow-x-auto">
    <table className="table table-pin-rows table-pin-cols table-lg">
        {/* head */}
        <thead>
        <tr>
            <th>Service</th>
            <th>Dev <input type="checkbox" className="toggle toggle-xs" defaultChecked onChange={(e) => setShowDev(e.target.checked)}/></th>
            <th>UAT <input type="checkbox" className="toggle toggle-xs" defaultChecked onChange={(e) => setShowUAT(e.target.checked)}/></th>
            <th>Prod <input type="checkbox" className="toggle toggle-xs" defaultChecked onChange={(e) => setShowProd(e.target.checked)}/></th>
        </tr>
        </thead>
        <tbody>
        {/* row 1 */}
        {sortService?.map((x:ServiceProps)=>(
        <tr className="hover">
            <th>{x.name}</th>
            <td>{showDev ? x.nonprod : null}</td>
            <td>{showUAT ? x.uat : null}</td>
            <td>{showProd ? x.prod : null}</td>
        </tr>   
        ))}
        </tbody>
    </table>
    </div>
  )
}

export default Table
