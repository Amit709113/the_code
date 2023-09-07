import React from 'react'

const answer=
`

        int maxLimit = 100001;
        int[] steps = new int[maxLimit];
        Arrays.fill(steps, -1);

        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        steps[start] = 0;

        while (!queue.isEmpty()) {
            int current = queue.poll();
            if (current == end) {
                return steps[current];
            }

            for (int number : arr) {
                int newStart = (current * number) % 100000;
                if (steps[newStart] == -1) {
                    steps[newStart] = steps[current] + 1;
                    queue.offer(newStart);
                }
            }
        }

        return -1; 
    
`
const stepp=`

STEP 1: change language to java 🚩  
STEP 2: paste at marked position
class Solution {
    int minimumMultiplications(int[] arr, int start, int end) {

        // Your code here
        //paste here
    }
}


`
const copyHandler= ()=>{
    navigator.clipboard.writeText(answer).then(() => {
        alert("(-> JAVA The code has been copied successfully 👍🏽");
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
        <h3>DATE:07-sep-2023</h3>
        <p>at 07:30 am</p>
        
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