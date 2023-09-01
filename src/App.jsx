import React from 'react'
const bold=<b> JAVA </b>;
const underline="<i> itelic </i> ";

const answer=
`

if(node==null)return;
        Queue<Node> q=new LinkedList<>();
        q.add(node);
        while(!q.isEmpty()){
            int x=q.size();
            for(int i=0;i<x;i++){
                Node z=q.poll();
                if(i==0||i==x-1)
                if(z.left!=null)q.add(z.left);
                if(z.right!=null)q.add(z.right);
            }
        }
        return;

`
const stepp=`

STEP 1: change language to java
STEP 2: paste at marked position
class Tree
{
    public static void printCorner(Node node)
    {
        
        // add your code here    
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
        <h3>DATE:01-sep-2023</h3>
        <p>at 9:23 am</p>
        
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