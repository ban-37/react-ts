import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Input, Card } from 'antd';
let id = 0
const C = () => {
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
        let _Chang = Chang
        _list[Num].Data = _Chang
        setList([..._list])
        setBol(false)
    }
    const handlerCheck = () => {
        const _list = List
        const _Check = Check

        const _S_list = _list.filter((item, index) => {
            return item.Data.includes(_Check)
        })
        setS_list([..._S_list])
    }

    useEffect(() => {

    }, [List])

    return (
        <>
            <h1> 这是C组件</h1>

            <Input type="text" id=''
                value={Data} onChange={(eve) => { setData(eve.target.value) }}
            />
            <Button type="primary" onClick={() => handlerAdd()}>确定</Button>
            <hr />
            {List.length === 0 && <h3 >暂无留言</h3>}
            <ul>
                {List.map((item, index) => (
                    <li key={item.id}>
                        {item.Data}
                        <Button danger
                            onClick={(eve) => handlerDel(eve, index)}
                            style={{ marginLeft: 50 }}>删除</Button>
                        <Button danger
                            onClick={(eve) => {
                                setNum(index)
                                return setBol(true)
                            }}
                            style={{ marginLeft: 50 }} >修改</Button>
                    </li>
                )
                )}
            </ul>
            <>
                {Bol && <>
                    <Input type="text" value={Chang} onChange={(eve) => setChang(eve.target.value)}></Input>
                    <Button type="primary" onClick={() => handlerChang()} >确定</Button>
                </>
                }
            </>
            <hr />
            <Input type="text" value={Check} onChange={(eve) => setCheck(eve.target.value)} />
            <Button type="primary" onClick={() => handlerCheck()}>查询</Button>
            <Card title={S_list.length === 0 ? "暂无数据" : "查询的数据"} style={{ width: 300 }}>
                {S_list.length !== 0 &&
                    <>
                        {S_list.map((item, index) => (
                            <ul key={item.id}>
                                <li>{item.Data}</li>
                            </ul>
                        ))
                        }
                    </>
                }
            </Card>
        </>

    )
}

export default C