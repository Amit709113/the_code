import React from 'react'


const answer=
`
        Node temp;
        Node p=new Node(Key);
        p.left=null;
        p.right=null;
       
        
        if(root==null) root=p;
        else
        {
            temp=root;
            while(temp!=null)
            {
                if(temp.data==p.data) break;
                if(temp.data>p.data)
                {
                    if(temp.left==null)
                    {
                      temp.left=p;
                      break;
                    }
                    else
                      temp=temp.left;
                }
                else if(temp.data<p.data)
                {
                    if(temp.right==null)
                    {
                        temp.right=p;
                        break;
                    }
                    else
                     temp=temp.right;
                }
            }
        }
        return root;
`
const stepp=`

STEP 1: change language to java  
STEP 2: paste at marked position
class Solution {
    // Function to insert a node in a BST.
    Node insert(Node root, int Key) {
        // your code here
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
        <h3> DATE: 10-sep-2023 </h3>
        <p>at 06:53 am</p>
        
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