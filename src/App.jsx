import React, { useState } from 'react'


const answer=
`
static ArrayList<Integer> ans;
static HashSet<Integer> set;
Solution(){
    ans = new ArrayList<>();
    set = new HashSet<>();
}

public static ArrayList<Integer> findCommon(Node root1,Node root2)
{
    preorder(root1);
    preorder(root2);
    Collections.sort(ans);
    return ans;
}
public static void preorder(Node root){
    if(root == null){
        return ;
    }
    if(set.contains(root.data)){
        ans.add(root.data);
    }else{
        set.add(root.data);
    }
    preorder(root.left);
    preorder(root.right);
}

`
const stepp=`

        STEP 1: change language to java   
        Step 2: 
        class Solution
        {
            //Function to find the nodes that are common in both BST.
            public static ArrayList<Integer> findCommon(Node root1,Node root2)
            {
                //code here
            }
        }
        remove this from above code
        
        public static ArrayList<Integer> findCommon(Node root1,Node root2)
        {
            //code here
        }

        Step 3: then paste here
        class Solution{
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
        <h3>last modified :  14-oct-2023 10:20 PM</h3>
        
        
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