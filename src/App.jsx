import { useEffect } from 'react';
import './style/App.css';
import { useGlitch } from 'react-powerglitch'
const App=()=>{
  document.title="Beansite Selector"
  document.getElementById("icon").setAttribute("href","/assets/favicon_modern.png");
  const OS=(props)=>{
    const glitch = useGlitch({
      "timing": {
        "duration": 1000
      },
      "glitchTimeSpan": {
        "start":0,
        "end":1
      },
      "shake": {
        "velocity": 5,
        "amplitudeX": 0.05,
        "amplitudeY": 0.05
      }
    })
    useEffect(()=>{
      document.getElementById(props.id).addEventListener("click",()=>{
        if(props.glitch){
          const confirmation=confirm("This version of beansite is abandoned and buggy. are you sure you want to continue?");
          if(confirmation){
            window.location.href=props.url;}
        }else{window.location.href=props.url;}
      });
    },[]);
    return(<div className={`os${props.new?" new":""}`} id={props.id}>
      {!props.glitch?
        <div className='hdd_icon'></div>:
        <span>
          <div className='hdd_icon' id="glitched" ref={glitch.ref}></div>
        </span>}
      <h1 id={`${props.id}txt`}>{props.title}</h1>
    </div>)
  }
  return (<>
    <h1 id="title">Select your OS</h1>
    <div id="os_wrapper">
      <OS id="b95" title="Beansite 95" url="https://mb95.vercel.app"/>
      <OS id="b98" title="Beansite 98 (preview)" url="https://b98-preview.vercel.app" glitch/>
      <OS id="bxp" title="Beansite XP (new!)" url="https://mbxp.vercel.app" new/>
    </div>
  </>)
}
export default App;