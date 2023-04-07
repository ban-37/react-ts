interface Iprops {
  message?:string
}
function ErrorPage(props:Iprops) {
  return ( <div>
    <h2>页面加载发生错误</h2>
    <p>{props.message}</p>
  </div> );
}

export default ErrorPage;