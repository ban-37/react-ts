// 导入usestate
import { useState,useEffect } from 'react'
// 导入接口
import { getTag } from '../../api/purchase'
// 导入dayjs
import dayjs from 'dayjs'
import {Card,Button} from 'antd'
// 导入活动状态的常量
import {GROUPBUY_STATE,DATETIME_FORMAT,SHOW_HOME,CUSTOM_TYPE,DILIVER_TYPE} from '../../config/index'
import type {GroupBuyType,TagType} from '../../types'
interface Iprops{
  groupInfo:GroupBuyType
}
function GroupBuyInfo(props:Iprops) {
  // 定义标签
  const [tag,setTag] = useState<TagType>({})
  const  groupInfo = props.groupInfo;
  const state = Number(groupInfo.state)
  // 请求tag数据
  useEffect(()=>{
    getTag({id:groupInfo.tag})
    .then(res=>{
      setTag(res.data.data[0])
    })
  },[])
  return ( <div>    
    {/* <p>{JSON.stringify(groupInfo)}</p> */}
   
    <Card type='inner' title=" 活动状态">
      <p>{GROUPBUY_STATE[state]}</p>
      {state<=2?<Button>提前结束</Button>:''}
    </Card>
    <Card type='inner' title="活动信息">
      <p>
        <span> 活动名称：</span>
        <span>{groupInfo.name}</span>
      </p>
      <p>
        <span> 活动名称：</span>
        <span>{dayjs(groupInfo.startTime).format(DATETIME_FORMAT)} 到 {dayjs(groupInfo.endTime).format(DATETIME_FORMAT)}</span>
      </p>
      <p>
        <span> 广告语：</span>
        <span>{groupInfo.slogan}</span>
      </p>
      <p>
        <span> 预告时间：</span>
        <span>{dayjs(groupInfo.preTime).format(DATETIME_FORMAT)}</span>
      </p>
      <p>
        <span> 首页展示：</span>
        <span>{SHOW_HOME[Number(groupInfo.showHome)]}</span>
      </p>
      <p>
        <span> 标签：</span>
        <span><img src={tag.pic} alt='标签' width="60" /></span>
      </p>
    </Card>
    <Card type='inner' title="活动规则">
      <p>
          <span> 顾客类型：</span>
          <span>{CUSTOM_TYPE[Number(groupInfo.target)]}</span>
      </p>
      <p>
          <span> 是否限量：</span>
          <span>{groupInfo.limitBuy===999?'不限':groupInfo.limitBuy}</span>
      </p>
      <p>
          <span> 配送方式：</span>
          <span>{DILIVER_TYPE[Number(groupInfo.deliverWay)]}</span>
      </p>
      <p>
          <span> 提货时间：</span>
          <span>{dayjs(groupInfo.pickTime).format(DATETIME_FORMAT)}</span>
      </p>
    </Card>
  </div> );
}

export default GroupBuyInfo;