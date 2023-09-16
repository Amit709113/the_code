import React, { useState } from 'react'


const answer=
`
if(n==1) return 1L;
        
int[] dp=new int[n+1];
dp[0]=1;

int mod=1000000007;

for(int i=1;i<=n;i++){
    int one=dp[i-1];
    int two=0,three=0;
    if(i>=2) two=dp[i-2];
    if(i>=3) three=dp[i-3];
    dp[i]=((one%mod+two%mod)%mod+three%mod)%mod;
}

return dp[n];
`
const stepp=`

STEP 1: change language to java  
STEP 2: paste at marked position
class Solution{
    static long countWays(int n)
    {
        // add your code here
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
        <h3>last modified :  16-sep-2023 at 9:19 PM</h3>
        
        
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