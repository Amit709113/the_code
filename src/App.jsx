import React, { useState } from 'react'


const answer=
`
    int mod=(int)1e9+7;
    int zero=1;
    int [][] dp=new int[n][sum+1];
    for(int i=0;i<n;i++)
    {
        dp[i][0]=1;
        if(arr[0]==0)zero=2;
        
    }
    if(arr[0]<=sum)
        dp[0][arr[0]]=1;
    
    
    for(int j=1;j<n;j++)
    {
        for(int t=0;t<=sum;t++)
        {
            int np=dp[j-1][t];
            int p=0;
            if(arr[j]<=t)
                p=dp[j-1][t-arr[j]];
            dp[j][t]=(p+np)%mod;
            
        }
    }
    return dp[n-1][sum]*zero%mod;
`
const stepp=`

STEP 1: change language to java  
STEP 2: paste at marked position
class Solution{
    public int perfectSum(int arr[],int n, int sum) 
	{ 
	    // Your code goes here
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
        <h3>last modified :  14-sep-2023 at 7:01 am</h3>
        
        
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