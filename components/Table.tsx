import { CategoryProps, ServiceProps } from '@/types'
import React from 'react'

function Table({service}:any) {
    // console.log(service)
  return (
    <div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th>Service</th>
            <th>Dev</th>
            <th>UAT</th>
            <th>Prod</th>
        </tr>
        </thead>
        <tbody>
        {/* row 1 */}
        {service?.map((x:ServiceProps)=>(
        <tr>
            <th>{x.name}</th>
            <td>{x.nonprod}</td>
            <td>{x.uat}</td>
            <td>{x.prod}</td>
        </tr>   
        ))}
        </tbody>
    </table>
    </div>
  )
}

export default Table