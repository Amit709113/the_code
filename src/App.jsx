import React, { useState } from 'react'


const answer=
`
        ArrayList<Integer>list = new ArrayList<>();
        HashMap<Integer,Integer>hs = new HashMap<>();
        for(int i = 0; i<arr.length; i++){
            hs.put(arr[i],hs.getOrDefault(arr[i],0)+1);
        }
        for(int i : hs.keySet()){
            int key = hs.get(i);
            if(key > 1)
                list.add(i);
            
        }
        if(list.size() == 0 ) list.add(-1);
        Collections.sort(list);
        return list;

`
const stepp=`

STEP 1: change language to java   
STEP 2: paste at marked position
class Solution{
    class Solution {
        public static ArrayList<Integer> duplicates(int arr[], int n) {
            // code here
            // paste here
        }
    }
        
    
}

`
const copyHandler= ()=>{
    navigator.clipboard.writeText(answer).then(() => {
        alert("remember to switch to java, copied successfully 👍🏽");
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
        <h3>last modified :  24-sep-2023 04:36 AM</h3>
        
        
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