import React from 'react'

const answer=
`

        for(int i=0;i<n;i++)
            for(int j=0;j<m;j++)
                if((i==0 ||i==n-1 || j==0||j==m-1)&& a[i][j]=='O')  dfs(a,i,j);
        for(int i=0;i<n;i++)
            for(int j=0;j<m;j++)
                a[i][j]=a[i][j]!='k'?'X':'O';          
        return a;
    }
    static void dfs(char mat[][],int i,int j)
    {
        if(i<0 || j<0 || i>=mat.length || j>=mat[0].length || mat[i][j]!='O')
            return;
        mat[i][j]='k';
        dfs(mat,i+1,j);
        dfs(mat,i-1,j);
        dfs(mat,i,j+1);
        dfs(mat,i,j-1);
    
`
const stepp=`

STEP 1: change language to java
STEP 2: paste at marked position
class Solution{
    static char[][] fill(int n, int m, char a[][])
    {
        // code here
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
        <h3>DATE:04-sep-2023</h3>
        <p>at 09:36 am</p>
        
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