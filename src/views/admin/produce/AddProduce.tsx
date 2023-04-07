import * as echarts from 'echarts';
import { useEffect, useState,useRef} from 'react';
const baseOpton = {
  title: {
    text: 'ECharts 入门示例'
  },
  legend:{data:["js","react","成绩"]},
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    },
    {
      name:'成绩',
      type:'pie',
      data:[{name:'js',value:50},{name:'react',value:100}]
    }
  ]
}
function AddProduce() {
  const [option,setOption] =useState<any>(baseOpton)
  const main  = useRef<any>()
  useEffect(()=>{
    // const root:HTMLElement = document.getElementById("main")!
    const root = document.getElementById("main") as HTMLElement
    var myChart = echarts.init(root,'light');
    myChart.setOption(option)
  },[option])
  return ( <div>
    <h2>添加商品</h2>
    <input 
    onChange={e=>{
      var op = {...option}
      op.series[0].data[0] = Number(e.target.value);
      setOption(op)
    }}
    value={option.series[0].data[0]}/>
     <input 
    onChange={e=>{
      var op = {...option}
      op.series[1].data[0].value = Number(e.target.value);
      setOption(op)
    }}
    value={option.series[0].data[0].value}/>
    <div id='main' ref={main} style={{width:'100%',height:800}}></div>
    </div> );
}

export default AddProduce;