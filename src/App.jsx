import React, { useState } from 'react'


const answer=
`
Map<String, Integer> mp = new HashMap<>();
    
String recur (Node root){
    if(root ==null){
        return "$";
    }
    String s = "";
    if(root.left==null && root.right==null){
        s+=root.data;
        return s;
    }
    
    
   
   s+=root.data;
    s+=recur(root.left);
    s+=recur(root.right);
    
 
     mp.put(s,mp.getOrDefault(s,0)+1);
     
     return s;
    
    
}
int dupSub(Node root) {

    recur(root);
    for(Integer num : mp.values()){
        
        if(num >=2){
            return 1;
        }
        
    
        
    }
    
    return 0;
}

`
const stepp=`

        STEP 1: change language to java   
        Step 2: 
        class Solution {
            int dupSub(Node root) {
                // code here 
            }
        }
        remove this from above code
        
        int dupSub(Node root ){
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
        <h3>last modified :  12-oct-2023 10:24 PM</h3>
        
        
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