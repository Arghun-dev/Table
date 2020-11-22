import React from 'react'
import './row.css'

export default function Row({ children }) {
    return (
        <div style={{ width: '80%' }}>
            <div className="row">
                <p>نام</p>
                <p>نام خانوادگی</p>
                <p>شغل</p>
            </div>
            <div className="row">
                <p>ارغون</p>
                <p>موسی نژاد</p>
                <p>برنامه نویس</p>
            </div>
            <div className="row">
                <p>ارغون</p>
                <p>موسی نژاد</p>
                <p>برنامه نویس</p>
            </div>
            <div className="row">
                <p>ارغون</p>
                <p>موسی نژاد</p>
                <p>برنامه نویس</p>
            </div>
        </div>
    )
}