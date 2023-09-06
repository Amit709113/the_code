import React from 'react'

const answer=
`
vector<int >vis(V, 0);
    int lastnode =0;
    for (int i =0;i< V ;i++){
        if (vis[i] ==0 ){
            dfs(adj,V , i, vis);
            lastnode =i ;
        }
    }
    for (int i=0;i< V ;i++){
        vis[i]= 0;
    }
    dfs(adj, V , lastnode , vis);
    
    for (int i=0; i< V ;i++){
        if (vis[i] ==0 ) {
            return -1;
        }
    }
    return lastnode;
	    
	}
	void dfs(vector<int >adj[] , int V , int start , vector<int >& vis ){
        vis[start] = 1;
        for (auto it:adj[start]){
            if (!vis[it] ){
                dfs(adj , V , it , vis );
            }
        }
    
`
const stepp=`

STEP 1: change language to C++ 🚩  
STEP 2: paste at marked position
class Solution 
{
    public:
    //Function to find a Mother Vertex in the Graph.
	int findMotherVertex(int V, vector<int>adj[])
	{
	    // Code here
        //paste here
	}

};

`
const copyHandler= ()=>{
    navigator.clipboard.writeText(answer).then(() => {
        alert("(imp* change language to c++)The code has been copied successfully 👍🏽");
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
        <h3>DATE:06-sep-2023</h3>
        <p>at 08:10 am</p>
        
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