import React from 'react'

const answer=
`

List<List<Integer>>al=new ArrayList<>();
for(int i=0;i<V;i++){
    al.add(new ArrayList<>());
}
for(int i=0;i<edges.length;i++){
    al.get(edges[i][0]).add(edges[i][1]);
    al.get(edges[i][1]).add(edges[i][0]);
}
return al;
    
`
const stepp=`

STEP 1: change language to java
STEP 2: paste at marked position
class Solution {
    public List<List<Integer>> printGraph(int V, int edges[][]) {
        //paste here 
         
    }
}

`
const copyHandler= ()=>{
    navigator.clipboard.writeText(answer).then(() => {
        alert("The code has been copied successfully 👍🏽");
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
        <h3>DATE:05-sep-2023</h3>
        <p>at 02:20 pm</p>
        
        <div>
            <pre>
                {stepp}
            </pre> 
        </div>
        <br />
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