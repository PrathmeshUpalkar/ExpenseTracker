import React from 'react'

const obj = [
    {
        type: 'Saving',
        color: '#f9c74f',
        percent: 45
    },
    {
        type: 'Inverstment',
        color: '#f9c74f',
        percent: 20
    },
    {
        type: 'Expence',
        color: 'rgb(54,162,235)',
        percent: 10
    }
]
export default function Lable() {
    return (
        <div className=''>{obj.map((v,i)=><LableComponent key={i} data={v}></LableComponent>)}</div>
    )
}

function LableComponent({data}) {
    if(!data) {<></>}

    return (
        <>

<div className="labels flex justify-between mt-4">
            <div className="flex gap-2">
                <div className='w-2 h-2 rounded py-3' style={{background: data.color ?? '#f9c74f'}}></div>
                <h3 className='text-md'>{data.type ?? ''}</h3>
            </div>
            <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
        </div>
        </>
    )
}