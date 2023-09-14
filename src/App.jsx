import React, { useState } from 'react'


const answer=
`
     int sum = 0;
        for(int i=0; i<N; i++) {
            sum += arr[i];
        }
        
        if(sum %2 == 1) return 0;
        
        sum /= 2;
        boolean[] dp = new boolean[sum+1];
        return (subset(arr, sum, N-1, dp) == true) ? 1:0;
    }
    
    static boolean subset(int[] arr, int sum , int N, boolean[] dp) {
        if(sum == 0) return true;
        if(N <= 0) return false;
        if(sum < 0) return false;
        
        if(dp[sum] == true) return false;
        
        return dp[sum] = subset(arr, sum-arr[N-1], N-1, dp) || subset(arr, sum, N-1, dp);
`
const stepp=`

STEP 1: change language to java  
STEP 2: paste at marked position
class Solution{
   static int equalPartition(int N, int arr[])
    {
        // code here
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
        <h3>last modified :  15-sep-2023 at 5:12 am</h3>
        
        
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