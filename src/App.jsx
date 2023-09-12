import React, { useState } from 'react'


const answer=
`
    if(S==0 && N>1) return "-1";
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<N;i++){
            if(S>=9) {
                sb.append('9');
                S-=9;
            }
            else {
                sb.append(S+"");
                S=0;
            }
        }
        if(S>0) return "-1";
        return sb.toString();
`
const stepp=`

STEP 1: change language to java  
STEP 2: paste at marked position
class Solution{
    static String findLargest(int N, int S){
        // code here
        //paste here
    }
}
 


`
const copyHandler= ()=>{
    navigator.clipboard.writeText(answer).then(() => {
        alert("(The code has been copied successfully 👍🏽");
      })
      .catch(() => {
        alert("something went wrong please copy manually😔");
      });
    
}
const btnStyle={
    background:"#9b59b6",
    color:"#fff",
    border:"2px solid #ecf0f1",
    outline:"none",
    borderRadius:"5px",
    textTransform:"uppercase",
    cursor:"pointer",
    padding:"15px 20px"
}
const App = () => {
 return (
    <>
        <h1>Solution of POTD  </h1>
        <h3>last modified :  13-sep-2023 at 2:00 am</h3>
        
        
        <div>
            <pre>
                {stepp}
            </pre> 
        </div>
        <br />
        <h6>{new Date().toLocaleTimeString()}</h6>
        <p>{`ans ->`}</p>
        <br />
        <div style={{display:"flex",justifyContent:"center",gap:50}}>
            <button style={btnStyle} onClick={copyHandler}> click to copy </button>
            <a href="https://practice.geeksforgeeks.org/problem-of-the-day"><button style={btnStyle} marginRight="50px" >POTD direct Link</button></a>
        </div>
        <br />
        <div style={{display:'flex',justifyContent:"center"}}>
        <textarea className='textareaStyle' type="textarea" style={{fontSize: "12pt",width:"90%",height:"60vh",background:"#d3d3d3"}} defaultValue={answer} readOnly>
        </textarea>
        </div>    
    </>
  )
}
export default App