// 导入团购信息接口
import {GroupBuyType} from '../../../types'
// 导入params
import { useParams,Link} from 'react-router-dom';
// 导入获取团购信息的接口
import { getGroupBuy } from '../../../api/purchase';
// 导入useEffect 和useState
import { useEffect,useState } from 'react';
// 导入tabs
import {Tabs,Button,Space} from 'antd';
// 导入三个组件
import GroupBuyInfo from '../../../components/channel/GroupBuyInfo';
import GroupProList from '../../../components/channel/GroupProList';
import GroupShopList from '../../../components/channel/GroupShopList';
function GroupBuyDetail() {
  // 定义当前的团购信息
  const [groupInfo,setGroupInfo] = useState<GroupBuyType>({});
  // 定义params
  const params = useParams();
  // 请求数据
  useEffect(()=>{
    // 进入获取团购信息
    getGroupBuy({id:params.id})
    .then(res=>{
      // 更新数据
      setGroupInfo(res.data.data[0])
    })
  },[])
  
  // tabs配置项
  const items = [
    // 把团购信息传递个子组件 GroupBuyInfo
    {label:'活动信息',key:"1",children:<GroupBuyInfo groupInfo={groupInfo} />},
    {label:'商品列表',key:"2",children:<GroupProList groupInfo={groupInfo}/>},
    {label:'店铺列表',key:"3",children:<GroupShopList  groupInfo={groupInfo}/>}
  ]
  return ( <div className="GroupBuyDetail">
    
     <Button style={{margin:"16px 0"}}><Link to="/admin/channel/communityPurchase">←返回</Link></Button>
     
    <Tabs
        defaultActiveKey="1"
        type="card"       
        items={items}
      />
  </div> );
}

export default GroupBuyDetail;