import dayjs from  'dayjs'
// 导入三个步骤组件
import CreateGroupFinish from '../../../components/channel/CreateGroupFinish';
import SelectProducts from '../../../components/channel/SelectProducts';
import CreateGroupInfo from '../../../components/channel/CreateGroupInfo';
// 导入步骤组件
import { Steps } from 'antd';
// 使用状态
import { useState } from 'react';
// 基础的团购信息
const baseGroupInfo = 
{
   
  "name": "测试团购活动",
  "startTime": dayjs().format("YYYY-MM-DD HH:mm:ss"),
  "endTime": dayjs().format("YYYY-MM-DD HH:mm:ss"),
  "slogan": '测试口号',
  "showHome": "1",
  "homePic": 'https://m15.360buyimg.com/mobilecms/jfs/t1/90537/28/34381/94784/63ead64aFabb4d1b8/154e0b4180874a0e.jpg!cr_1125x449_0_166!q70.jpg',
  "banner": 'https://m15.360buyimg.com/mobilecms/jfs/t1/90537/28/34381/94784/63ead64aFabb4d1b8/154e0b4180874a0e.jpg!cr_1125x449_0_166!q70.jpg',
  "showType": 1,
  "target": 1,
  "limitBuy": 999,
  "shop": '829,824',
  "deliverWay": 1,
  "pickTime": dayjs(new Date(Date.now()+1000*60*60*24)+"").format("YYYY-MM-DD HH:mm:ss"),
  "products": "586,587,588",
  "preTime":  dayjs(new Date(Date.now()-1000*60*60*24)+"").format("YYYY-MM-DD HH:mm:ss"),
  "tag": 1,
  "state": 1
}

function CreateGroupBuy() {
  // 创建活动信息
  const [groupInfo,setGroupInfo] = useState(baseGroupInfo)
  // 当前是第几个步骤
  const [current,setCurrent] = useState(0)
  // 步骤配置 content内容
  const items = [
    {title: '活动信息',content:<CreateGroupInfo  
    setCurrent={setCurrent} 
    setGroupInfo={setGroupInfo}
    groupInfo={groupInfo}/>},
    {title: '添加活动商品',content:<SelectProducts   
    setCurrent={setCurrent} 
    setGroupInfo={setGroupInfo}
    groupInfo={groupInfo}/>},
    {title: '创建成功',content:<CreateGroupFinish/>},
  ]
  return ( <div>
     <Steps 
     onChange={e=>setCurrent(e)}
     current={current} 
     labelPlacement="vertical" 
     items={items} 
     style={{width:'50%',margin:'16px auto'}}/>
     {/* 根据current显示不同的content */}
     {items[current].content}
  </div> );
}

export default CreateGroupBuy;