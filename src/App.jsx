import React, { useState } from 'react'


const answer=
`
    if(n==0)
    {
        return -1;
    }
    if(n==1)
    {
        return 1;
    }
    long num1=0,num2=0;
    for(int i=0;i<n/2;i++)
    {
        num1+=arr[i];
        
    }
    for(int i=n/2;i<n;i++)
    {
        num2+=arr[i];
        
    }
    if(num1<num2)
    {
        int x=n/2;
        num1=num1-arr[n/2-1];
        for(int i=n/2-1;i<n-2;i++)
        {
            num1=num1+arr[i];
            num2=0;
        for(int j=x+1;j<n;j++)
        {
            num2+=arr[j];
        }
        if(num1==num2)
        {
            return x+1;
        }
        x++;
        }
    }
    else if(num1>num2)
    {
        num1=0;
    for(int i=0;i<n/2;i++)
    {
        num1=num1+arr[i];
        num2=0;
        for(int j=i+2;j<n;j++)
        {
            num2=num2+arr[j];
        }
        if(num1==num2)
        {
            return i+2;
        }
    }
    }
    else
    {
        return -1;
    }
        
    
    return -1;

`
const stepp=`

STEP 1: change language to java  
STEP 2: paste at marked position
class Solution{
    // a: input array
    // n: size of array
    // Function to find equilibrium point in the array.
    public static int equilibriumPoint(long arr[], int n) {
        // Your code here
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
        <h3>last modified :  23-sep-2023 at 6:42 AM</h3>
        
        
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