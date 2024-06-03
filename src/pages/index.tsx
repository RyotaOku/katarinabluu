import { useState } from 'react'

export default function Main() {
    const [num, setNum] = useState<number>(0)

    return (
        <>
            <p>開発中</p>
            <p>{num}</p>
            <button style={{ border: '1px solid #000' }} onClick={() => {
                setNum(num + 1)
            }}>クリックしたら1増えます</button>
            <button onClick={() => {
                // window.open('https://localhost:50443/introduction', '_self');
            }}>クリックしてね</button>
        </>
    )
}