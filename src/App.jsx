import React, { useState } from 'react'


const answer=
`
        Arrays.sort(A);
        Arrays.sort(B);

        PriorityQueue<Integer> pq=new PriorityQueue<>();

        for(int i=N-1;i>N-K-1;i--){
            for(int j=N-1;j>N-K-1;j--){
                int n=A[i]+B[j];
                
                if(pq.size()<K){
                    pq.add(n);
                }else{
                    if(pq.peek()<n){
                        pq.poll();
                        pq.add(n);
                    }
                else break;
                }
            }
        }

        List<Integer> ans=new ArrayList<>();

        while(!pq.isEmpty()){
            if(ans.isEmpty())
            ans.add(pq.poll());
            else
            ans.add(0,pq.poll());
        }

        return ans;

`
const stepp=`

STEP 1: change language to java   
STEP 2: paste at marked position
class Solution{
    class Solution {
        static List<Integer> maxCombinations(int N, int K, int A[], int B[]) {
            // code here
            // paste here
        }
    }
        
    
}

`
const copyHandler= ()=>{
    navigator.clipboard.writeText(answer).then(() => {
        alert("copied successfully 👍🏽");
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
        <h3>last modified :  25-sep-2023 09:02 AM</h3>
        
        
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