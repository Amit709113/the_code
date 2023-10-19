import React, { useState } from 'react'


const answer=
`

Queue<Integer> q = new LinkedList<>();
      boolean vis[] = new boolean[V];
      q.add(0);
      vis[0] = true;
    
      int level = 0;

    while (!q.isEmpty()) {
        int n = q.size();
        for (int i = 0; i < n; i++) {
            int a = q.remove();
            if (a == X)
                return level;

            for (int j = 0; j < adj.get(a).size(); j++) {
                int arb = adj.get(a).get(j);
                if (!vis[arb]) {
                    vis[arb] = true;
                    q.add(arb);
                }
            }
        }
        level++;
        }
        return -1;
    
`
const stepp=`

        STEP 1: change language to java 
        Step 2: 
        class Solution
        {
            //Function to find the level of node X.
            int nodeLevel(int V, ArrayList<ArrayList<Integer>> adj, int X)
            {
                // code here
                //paste  here
            }
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
        <h3>last modified :  19-oct-2023 9:20 PM</h3>
        
        
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