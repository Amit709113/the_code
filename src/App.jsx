import React from 'react'


const answer=
`
     int n = count(root);
        convertArray(root);
        Integer[] arr = new Integer[n];
        arr = nodeArray.toArray(arr);
        Arrays.sort(arr);
        
        return arr[n-K];
    }
    
    ArrayList<Integer> nodeArray = new ArrayList<>();
    
    private void convertArray(Node root){
        if(root == null){
            return;
        }
        
        nodeArray.add(root.data);
        convertArray(root.left);
        convertArray(root.right);
    }
    
    private int count(Node root){
        if(root == null){
            return 0;
        }
        
        return count(root.left) + count(root.right) + 1;
    
`
const stepp=`

STEP 1: change language to java  
STEP 2: paste at marked position
class Solution
{
    // return the Kth largest element in the given BST rooted at 'root'
    public int kthLargest(Node root,int K)
    {
        //Your code here
        //paste here
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
        <h3> DATE: 09-sep-2023 </h3>
        <p>at 05:45 am</p>
        
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