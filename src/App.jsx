import React, { useState } from 'react'


const answer=
`
for(int k=0;k<graph.length;k++) {
			for(int i=0;i<graph.length;i++) {
				for(int j=0;j<graph.length;j++) {
					if(i == j) {
						graph[i][j] = 1;
					}
					if((graph[i][k]==1 && graph[k][j]==1) && graph[i][j] == 0) {
						graph[i][j] = 1;
					}
				}
			}
		}
		ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
		ArrayList<Integer> list ;
		for(int i=0;i<graph.length;i++) {
			list = new ArrayList<>();
			for(int j=0;j<graph[0].length;j++) {
				list.add(graph[i][j]);
			}
			ans.add(list);
		}
		return ans;

`
const stepp=`

        STEP 1: change language to java 
        Step 2: 
        class Solution{
            static ArrayList<ArrayList<Integer>> transitiveClosure(int N, int graph[][])
            {
                // code here
                // paste here
            }
        }
        
        

`
const copyHandler= ()=>{
    navigator.clipboard.writeText(answer).then(() => {
        alert(" c++ copied successfully 👍🏽");
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
        <h3>last modified :  17-oct-2023 9:38 PM</h3>
        
        
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