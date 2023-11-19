import React, { useState } from 'react'


const answer=
`

        Node *head=NULL, *tail=NULL;
        Node* temp1 = head1;
        Node* temp2 = head2;
        
        while(temp1 != NULL && temp2 != NULL)
        {
            if((temp1->data) < (temp2->data))
            {
                temp1 = temp1->next;
            }
            else if((temp1->data) > (temp2->data))
            {
                temp2 = temp2->next;
            }
            else
            {
                if(head == NULL)
                {
                    head = tail = new Node(temp1->data);
                }
                else
                {
                    tail->next = new Node(temp1->data);
                    tail = tail->next;
                }
                temp1 = temp1->next;
                temp2 = temp2->next;
            }
        }
        
        return head;
    
`
const stepp=`

        STEP 1: change language to c++
        Step 2: 
        class Solution
        {
            public:
            Node* findIntersection(Node* head1, Node* head2)
            {
                // Code Here
                Swathi paste here
            }
        }

`
const copyHandler= ()=>{
    navigator.clipboard.writeTeXt(answer).then(() => {
        alert(" copied successfully 👍🏽");
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
        <h3>last modified :  19-oct-2023 9:56 PM</h3>
        
        
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