import React,{useRef,useEffect} from 'react'

function Lovely() {
  const myinput = useRef(null);
  const mypassword = useRef(null);
  const submitref = useRef(null);
  useEffect(()=>{
  myinput.current.focus()
  },[])

  function firstkeydown(e){
    if(e.key === "Enter"){
      mypassword.current.focus()
    }
  }

  function lastkeydown(e){
    if(e.key === "Enter"){
      submitref.current.focus()
    }
  }
  function submitdown(){
    alert("Data is Submited")
  }
  return (
    <div>
      <h3>Input Value in Useref</h3>
     <input onKeyDown={firstkeydown} ref={myinput} type="text" placeholder="Enter Your Value"/> 
     <br/>
     <input onKeyDown={lastkeydown} ref={mypassword} type="password" placeholder="Enter Your Password"/>
     <br/>
     <button onKeyDown={submitdown} ref={submitref}>Submit Data</button>
    </div>
  )
}

export default Lovely
