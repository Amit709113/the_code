import React, { useState } from 'react'


const answer=
`
int t = 0;
    int dx[4] = {1,-1,0,0};
    int dy[4] = {0,0,-1,1};
public:
    int isValid(int x,int y,vector<vector<int>>& vis,vector<vector<int>>& grid){
        return x<grid.size() and x>=0 and y<grid[0].size() and y>=0 and grid[x][y]==1 and vis[x][y]==0;
    }
    void dfsLen(vector<vector<int>>& grid,int i,int j,vector<vector<int>>& vis,int &len){
        len+=1;
        
        vis[i][j]=1;
        for(int k = 0;k<4;k++){
            int x = i+dx[k];
            int y = j+dy[k];
            if(isValid(x,y,vis,grid)){
                dfsLen(grid,x,y,vis,len);
            }
        }
    }
    void dfs(vector<vector<int>>& isLandLen,int i,int j,vector<vector<int>>&mp,vector<vector<int>>& grid,int &len,vector<vector<int>>&mpu){
        isLandLen[i][j] = len;
        mpu[i][j]=t;
        mp[i][j]=1;
        for(int k = 0;k<4;k++){
            int x = i+dx[k];
            int y = j+dy[k];
            if(isValid(x,y,mp,grid)){
                dfs(isLandLen,x,y,mp,grid,len,mpu);
            }
        }
    }
    void solve(vector<vector<int>>& grid,vector<vector<int>>& islandLen,int i,int j,vector<vector<int>>&mpu,vector<vector<int>>& vis,vector<vector<int>>&mp){
        int len = 0;
        dfsLen(grid,i,j,vis,len);
        dfs(islandLen,i,j,mp,grid,len,mpu);
        t++;
    }
    bool isV(int x,int y,int n,int m){
        return x>=0 and y>=0 and x<n and y<m;
    }
    int largestIsland(vector<vector<int>>& grid) {
         int n = grid.size();
        int m = grid[0].size();
        int maxi = INT_MIN;
        vector<vector<int>>mpu(n,vector<int>(m,0));
        vector<vector<int>>isLandLen(n,vector<int>(m,0));
        vector<vector<int>>vis(n,vector<int>(m,0));
        vector<vector<int>>mp(n,vector<int>(m,0));
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]==1 and isLandLen[i][j]==0){
                    solve(grid,isLandLen,i,j,mpu,vis,mp);
                }
            }
        }
        for(int i = 0;i<n;i++){
            for(int j=0;j<m;j++){
                unordered_map<int,int>mpk;
                if(grid[i][j]==0){
                    int s = 0;
                    for(int k=0;k<4;k++){
                        int x = i+dx[k];
                        int y = j+dy[k];
                        if(isV(x,y,n,m) and mpk.find(mpu[x][y])==mpk.end()){
                            s+=isLandLen[x][y];
                        }
                        if(isV(x,y,n,m) and grid[x][y]>0){
                        mpk[mpu[x][y]]++;}
                    }
                    maxi = max(1+s,maxi);
                }
            }
        }
        return (maxi==INT_MIN)?n*m:maxi;
    }
`
const stepp=`

        STEP 1: change language to java   
        Step 2: 
        class Solution
        {
        public:
            int largestIsland(vector<vector<int>>& grid) 
            {
                // Your code goes here.
            }
        };
        remove this from above code
        
        public:
            int largestIsland(vector<vector<int>>& grid) 
            {
                // Your code goes here.
            }
        Step 3: then paste here
        
        class Solution {
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
        <h3>last modified :  16-oct-2023 9:30 PM</h3>
        
        
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