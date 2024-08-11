import React from 'react'
import './table.css'

export default function Table({ data }) {
    return (
        <table>
            <caption>
                Teachers
            </caption>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Lecture</th>
                    <th scope="col">Credits</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                    return (
                        <tr>
                            <th scope="row">{item.name}</th>
                            <td>{item.lecture}</td>
                            <td>{item.credits}</td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row" colspan="2">Teachers</th>
                    <td>{data.length}</td>
                </tr>
            </tfoot>
        </table>
    )
}
