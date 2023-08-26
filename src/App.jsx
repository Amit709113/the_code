import React, { useState } from 'react'

const answer=
`
    HashMap<Character,Integer>map = new HashMap<>();
        int i=0;
        int j=0;
        int n=s.length();
        int ans=-1;
        while(j<n){
            map.put(s.charAt(j),map.getOrDefault(s.charAt(j),0)+1);
            
            if(map.size()<k)j++;
            
             else if (map.size() == k) {
                ans = Math.max(ans, j - i + 1);
                j++;
             }
             else{
                 while(map.size()>k){
                    map.put(s.charAt(i),map.getOrDefault(s.charAt(i),0)-1);
                    if(map.get(s.charAt(i))==0){
                        map.remove(s.charAt(i));
                }
                i++;
                 }
                 j++;
             }
    	}
    	return ans;
`
const stepp=`
step 1: change language to java

step 2:
class Solution {
    public int longestkSubstr(String s, int k) {
    {
        //code here.
        // yaha par paste kar do

    }
}
`
const copyHandler= ()=>{
    navigator.clipboard.writeText(answer);
    alert("The code has been successfully copied👍🏽");
    
}

let time=new Date();


const App = () => {



 return (
    <>
        <h1>Solution of POTD  </h1>
        <h3>DATE:26-aug-2023</h3>
        <p>at 4:00 pm</p>
        <div>
            <pre>
                {stepp}
            </pre> 
        </div>
        <br />
        <p>{`ans ->`}</p>
        <button onClick={copyHandler}> click to copy </button>
        <br />

        <div style={{display:'flex'}}>
        <textarea className='textareaStyle' type="textarea" style={{fontSize: "12pt",width:"90%",height:"60vh",background:"#d3d3d3"}} defaultValue={answer} readOnly>
        </textarea>
</div>
        
        
    </>
  )
}

export default App



