import React, { useState } from 'react'


const answer=
`
int mod = 1000000007;
    long numberOfPaths(int M, int N) {
        // Code Here
        int n = M+N-2;
        int r = M-1<N-1?M-1:N-1;
        long res = 1;
        
        for(int i=1; i<=r; i++){
            res = (res*(n-r+i)%mod * modInverse(i,mod))%mod;
        }
        return res;
    }
    
    long modInverse(int a, int b){
        int x = 1, y = 0;
        while(a>1){
            int q = a/b, temp = b;
            b = a%b;
            a = temp;
            temp = y;
            y = x-q*y;
            x = temp;
        }
        return x<0?x+mod:x;
    }
    
`
const stepp=`

        STEP 1: change language to java 
        Step 2: 
        class Solution
        {
            long numberOfPaths(int M, int N) {
                // Code Here
            }
        }

        delete the line
        
            long numberOfPaths(int M, int N) {
                // Code Here
            }
        step 3:paste here
        class Solution
        {
            paste here
        }


        

`
const copyHandler= ()=>{
    navigator.clipboard.writeTeXt(answer).then(() => {
        alert(" copied successfully 👍🏽");
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
        <h3>last modified :  22-oct-2023 4:33 PM</h3>
        
        
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