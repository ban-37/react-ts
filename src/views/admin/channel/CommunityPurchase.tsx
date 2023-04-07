// 导入Link组件
import { Link } from "react-router-dom";
// 导入查询组件
import SeachParams from "../../../components/channel/SearchParams";
// 导入常量 团购状态和日期格式
import { GROUPBUY_STATE, DATETIME_FORMAT } from "../../../config";
// 导入dayjs
import dayjs from "dayjs";
// 导入table
import { Table, Card, Button } from "antd";
import { useEffect, useState } from "react";
// 导入获取团购的接口
import { getGroupBuy } from "../../../api/purchase";
// 定义团购列表数据的接口类型
import type { GroupBuyType } from "../../../types";
// 表格列类型
import type { ColumnsType } from "antd/es/table";

const columns: ColumnsType<GroupBuyType> = [
  {
    title: "活动编号",
    dataIndex: "id",
  },
  {
    title: "活动名称",
    dataIndex: "name",
  },
  {
    title: "开始时间",
    dataIndex: "startTime",
    // dayjs(time)转字符串转换为时间
    //  dayjs(time).format格式化时间并输出
    render: (time: string) => dayjs(time).format(DATETIME_FORMAT),
  },
  {
    title: "结束时间",
    dataIndex: "endTime",
    //自定义渲染时间
    render: (time: string) => dayjs(time).format(DATETIME_FORMAT),
  },
  {
    title: "状态",
    dataIndex: "state",
    // state的值为 0 1 2 3  ，数组下标映射
    // 映射为 "待开始","预告中","进行中","已结束","提前结束
    render: (state: number) => GROUPBUY_STATE[state],
  },
  {
    title: "操作",
    render: (row) => (
      <Link to={"/admin/channel/groupBuyDetail/" + row.id}>查看详情</Link>
    ),
  },
];
const baseParams = {
  order: "asc",
  state: "",
  id: "",
  name: "",
  products: "",
  shop: "",
  startTime: "",
  endTime: "",
};

function CommunityPurchase() {
  // 定义分页数据
  const [pagination, setpagination] = useState({ total: 1, current: 1 });
  // 默认的查询参数
  const [params, setParams] = useState<GroupBuyType>(baseParams);
  //  团购列表数据
  const [groupBuyList, setGroupBuyList] = useState<GroupBuyType[]>([]);
  //  定义重置方法
  const reset = () => {
    setParams(baseParams);
    // 刚更新完数据，就去用数据取请求（问题：需要第二次才能）
    // 更新完毕立即取请求（请求的时候拿不到最新的params）
    // 监听params变化 如果 params等于baseParams就去请求
    // getGroup()
  };
  //  定义获取团购的函数
  function getGroup() {
    getGroupBuy({ ...params, current: pagination.current }).then((res) => {
      // 更新团购列表数
      setGroupBuyList(res.data.data);
      var p = res.data.pagination;
      // 更新分页数据
      setpagination({ current: Number(p.current), total: p.total });
      console.log(res.data.data);
    });
  }
  // 挂载获取数据(生命周期)

  useEffect(() => {
    getGroup();
  }, [pagination.current]);

  //监听params变化
  useEffect(() => {
    // params发生变化都会执行这个回调函数
    // 如果params等于baseParams 点击重置
    if (params === baseParams) {
      // params是最新的数据可以获取团购列表
      getGroup();
    }
  }, [params]);
  return (
    <div>
      <h3>社区团购</h3>
      <Card
        type="inner"
        title={
          <span>
            筛选查询 <Button 
            style={{ marginLeft: 32 }}> <Link to="/admin/channel/createGroupBuy">+ 创建团购活动</Link></Button>
          </span>
        }
      >
        <SeachParams
          reset={reset}
          params={params}
          setParams={setParams}
          getGroup={getGroup}
        />
      </Card>
      <Card type="inner" title={<span>数据展示</span>}>
        <Table
          size="small"
          onChange={(pa: any) => {
            setpagination({ ...pagination, current: pa.current });
          }}
          pagination={pagination}
          rowKey="id"
          columns={columns}
          dataSource={groupBuyList}
        />
      </Card>
      {/* {JSON.stringify(pagination)} */}
    </div>
  );
}

export default CommunityPurchase;
