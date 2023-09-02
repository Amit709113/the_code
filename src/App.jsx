import React from 'react'

const answer=
`

   if(root1 == null && root2 == null)
        {
            return true;
        }

        if(root1 == null && root2!= null)
        return false;

        if(root2 == null && root1 != null)
        return false;

        if(root1.data != root2.data)
        {
            return false;
        }

        return (isIsomorphic(root1.left, root2.left) && isIsomorphic(root1.right, root2.right) || 
        isIsomorphic(root1.left, root2.right) && isIsomorphic(root1.right, root2.left));

`
const stepp=`

STEP 1: change language to java
STEP 2: paste at marked position
class Solution  
{ 
    // Return True if the given trees are isomotphic. Else return False.
    boolean isIsomorphic(Node root1, Node root2)  
    { 
         // code here.
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
        <h3>DATE:03-sep-2023</h3>
        <p>at 00:50 am</p>
        
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