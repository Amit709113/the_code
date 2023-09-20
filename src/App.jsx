import React, { useState } from 'react'


const answer=
`
if (n == 0) {
    return 0;
}

if (n == 1) {
    return arr[0];
}

int[] dp = new int[n];

// Initialize the first two elements of the dp array.
dp[0] = arr[0];
dp[1] = Math.max(arr[0], arr[1]);

// Calculate the maximum money that can be obtained for each house.
for (int i = 2; i < n; i++) {
    // The thief can either skip the current house or loot it.
    // If he loots it, he adds the current house's value to the value obtained
    // two houses before (to ensure no consecutive houses are looted).
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
}

// The maximum money that can be obtained is stored in dp[n-1].
return dp[n - 1];
`
const stepp=`

STEP 1: change language to java  
STEP 2: paste at marked position
class Solution{
    public int FindMaxSum(int arr[], int n)
            
        // Your code here
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
        <h3>last modified :  21-sep-2023 at 5:23 AM</h3>
        
        
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