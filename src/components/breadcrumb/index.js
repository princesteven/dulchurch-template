import React from 'react'

const BreadCumb = ({ title, subtitle, buttonText }) => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex-column">
                <div className="font-semibold">{title}</div>
                <div className="font-light">{subtitle}</div>
            </div>
            <div className="my-3 self-end">
                <button className="bg-blue-primary px-3 py-2 text-white rounded">{buttonText}</button>
            </div>
        </div>
    )
}

export default BreadCumb
