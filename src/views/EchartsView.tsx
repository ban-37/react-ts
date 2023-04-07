// npm i echarts  -S 安装
import * as echarts from 'echarts'
import { useEffect, useState } from 'react';
// 图表选项
var baseOption = {
  title:{text:"学习react一周睡眠时间"},
  tooltip:{},
  legend:{data:["睡眠时间"]},
  xAxis:{data:[1,2,3,4,5,6,'日']},
  yAxis:{},
  series:[
    {name:"睡眠时间", type:"bar",data:[8,7,5,4,7,8,14]}
  ]
}
function EchartsView () {
  // 定义图表的数据
  const [option,setOption] = useState(baseOption);
  useEffect(()=>{
    // var container = document.getElementById("container")!;
    var container = document.getElementById("container") as HTMLElement
    // 初始化图表
    var echart = echarts.init(container,'light')
    // 更新图表数据
    echart.setOption(option)
  },[option])
  return ( <div>
    <h1>echarts图表</h1>
    <p>周三睡眠 :<input value={option.series[0].data[2]} onChange={e=>{
      var temp = {...option};
      temp.series[0].data[2] = Number(e.target.value)
      setOption(temp);
    }}/></p>
    <div id='container' style={{width:'100%',height:'800px'}}></div>
  </div> );
}

export default EchartsView;