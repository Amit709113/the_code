import React, { useState } from 'react'


const answer=
`
long []arr1 =  new long[N];
        long m=0 ,n=1,c=0 ;
        if(N==1){
            arr1[0]=n;
            return arr1;
        }
        for(int i=2; i<=N; i++){
            
            arr1[0]=1;
            c=m+n;
            arr1[i-1]=c;
            m=n;
            n=c;
            
        }
        return arr1;
`
const stepp=`

STEP 1: change language to java  
STEP 2: paste at marked position
class Solution{
    //Function to return list containing first n fibonacci numbers.
    public static long[] printFibb(int n) 
    {
        //Your code here
        // paste here
        
        
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
        <h3>last modified :  17-sep-2023 at 11:58 AM</h3>
        
        
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