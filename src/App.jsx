import React, { useState } from 'react'


const answer=
`
         HashMap<Node,Node>mp=new HashMap<>();
        Queue<Node>q=new LinkedList<>();
        q.add(root);
        while(q.size()!=0){
            Node temp=q.remove();
            if(temp.left!=null){
                mp.put(temp.left,temp);
                q.add(temp.left);
            }
            if(temp.right!=null){
                mp.put(temp.right,temp);
                q.add(temp.right);
            }
        }
        ArrayList<Integer>ans=new ArrayList<>();
        HashMap<Node,Integer>isVisit=new HashMap<>();
        Queue<Node>q1=new LinkedList<>();
        Node node=SearchTarget(root,target);
        q1.add(node);
        isVisit.put(node,0);
        while(q1.size()!=0){
            Node temp=q1.poll();
            
            if(temp.left!=null && !isVisit.containsKey(temp.left)){
                Node left=temp.left;
                q1.add(left);
                isVisit.put(left,isVisit.get(temp)+1);
                if(isVisit.get(left)==k){
                    ans.add(left.data);
                }
            }
            
            if(temp.right!=null && !isVisit.containsKey(temp.right)){
                Node right=temp.right;
                q1.add(right);
                isVisit.put(right,isVisit.get(temp)+1);
                if(isVisit.get(right)==k){
                    ans.add(right.data);
                }
            }
            
            if(mp.containsKey(temp) && !isVisit.containsKey(mp.get(temp))){
                Node parent=mp.get(temp);
                q1.add(parent);
                isVisit.put(parent,isVisit.get(temp)+1);
                if(isVisit.get(parent)==k){
                    ans.add(parent.data);
                }
            }
            
        }
        Collections.sort(ans);
        return ans;
    }
      public static Node SearchTarget(Node root,int val){
        if(root==null)return null;
        if(root.data==val)return root;
        Node left=SearchTarget(root.left,val);
        Node right=SearchTarget(root.right,val);
        if(left==null)return right;
        return left;
`
const stepp=`

        STEP 1: change language to java   
        
        STEP 2: paste at marked position
        class Solution
        {
            public static ArrayList<Integer> KDistanceNodes(Node root, int target , int k)
            {
                // return the sorted list of all nodes at k dist
                //paste here
            }
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
        <h3>last modified :  10-oct-2023 9:42 PM</h3>
        
        
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