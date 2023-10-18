import React, { useState } from 'react'


const answer=
`


        List<Integer> res=new ArrayList<>();
      
        boolean[] visit=new boolean[V];
        for(int i=0;i<V;i++){
            if(!isCycle(i,adj,visit)){
                res.add(i);
            }
        }
        return res;
    }
    private static boolean isCycle(int source,List<List<Integer>> adj,boolean[] visit){
       
        visit[source]=true;
        
        for(Integer it:adj.get(source)){
            if(!visit[it]){
                if(isCycle(it,adj,visit)) return true;
            }else return true;
    
        }
        visit[source]=false;
        return false;
    
`
const stepp=`

        STEP 1: change language to java 
        Step 2: 
        class Solution {

            List<Integer> eventualSafeNodes(int V, List<List<Integer>> adj) {
                // Your code here
                //paste here
            }
        }
        

`
const copyHandler= ()=>{
    navigator.clipboard.writeText(answer).then(() => {
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
        <h3>last modified :  18-oct-2023 9:10 PM</h3>
        
        
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