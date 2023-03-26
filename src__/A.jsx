import React from 'react'
import { useState, useEffect } from 'react';
let id = 0
const A = () => {
    const [Data, setData] = useState("")
    const [List, setList] = useState([])
    const [Bol, setBol] = useState(false)
    const [Num, setNum] = useState(null)
    const [Chang, setChang] = useState("")
    const [Check, setCheck] = useState("")
    const [S_list, setS_list] = useState([])

    const handlerAdd = () => {
        let _Data = Data
        const _list = List
        setList([..._list, {
            id: id++,
            Data: _Data
        }])
        setData("")
    }
    const handlerDel = (eve, index) => {
        const _list = [...List]
        _list.splice(index, 1)
        setList([..._list])
    }
    const handlerChang = () => {
        const _list = List
        let _Chang  = Chang
        _list[Num].Data = _Chang
        setList([..._list])
        setBol(false)
    }
    const handlerCheck = () => {
        const _list = List
        const _Check = Check
        
        const _S_list = _list.filter((item,index)=>{
            return item.Data.includes(_Check)
        })
        setS_list([..._S_list])
    }

    useEffect(() => {
        
    }, [List])

    return (
        <>
            <h1> 这是A组件</h1>
            <input type="text" id=''
                value={Data} onChange={(eve) => { setData(eve.target.value) }}
            />
            <button onClick={() => handlerAdd()}>确定</button>
            <hr />
            {List.length === 0 && <h3 >暂无留言</h3>}
            <ul>
                {List.map((item, index) => (
                    <li key={item.id}>
                        {item.Data}
                        <button
                            onClick={(eve) => handlerDel(eve, index)}
                            style={{ marginLeft: 50 }}>删除</button>
                        <button
                        onClick={(eve)=>{
                            setNum(index)
                            return setBol(true)
                            }}
                            style={{ marginLeft: 50 }} >修改</button>
                    </li>
                )
                )}
            </ul>
            <>
            {Bol && <>
                <input type="text" value={Chang} onChange={(eve)=>setChang(eve.target.value)}></input>
                <button onClick={()=>handlerChang()} >确定</button>
                </>
                }
            </>
        <hr />
        <input type="text" value={Check} onChange={(eve)=>setCheck(eve.target.value)}/>
        <button onClick={()=>handlerCheck()}>查询</button>
        {S_list.length !== 0 && <>
        <h1>查询的数据</h1>
        {S_list.map((item,index)=>(
            <ul key={item.id}>
                <li>{item.Data}</li>
            </ul>
        ))
        }
        </>
        }
        </>

    )
}

export default A