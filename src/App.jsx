import React, { useState } from 'react'


const answer=
`
Node buildBalancedTree(Node root) 
    {
        //Add your code here.
        if(root==null) return null;
        ArrayList<Integer>list=new ArrayList<>();
        inorder(root,list);
        return constructTree(list,0,list.size()-1);
    }
    public void inorder(Node root,ArrayList<Integer>list){
        if(root==null) return ;
        inorder(root.left,list);
        list.add(root.data);
        inorder(root.right,list);
    }
    public Node constructTree(ArrayList<Integer>list,int low,int high){
        if(low>high) return null;
        int mid=(low+high)/2;
        Node curr = new Node(list.get(mid));
        curr.left=constructTree(list,low,mid-1);
        curr.right=constructTree(list,mid+1,high);
        return curr;
    }
`
const stepp=`

        STEP 1: change language to java   
        Step 2: 
        class GfG
        {
            Node buildBalancedTree(Node root) 
            {
                //Add your code here.
            }
        }
        remove this from above code
        
        Node buildBalancedTree(Node root) 
        {
            //Add your code here.
        }

        Step 3: then paste here
        class GfG {
            //paste here
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
        <h3>last modified :  15-oct-2023 8:06 PM</h3>
        
        
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