import React from 'react'

const answer=
`
int height(Node* root) {
    if (root == NULL) {
        return 0;
    }
    return root->height;
}

int getBalanceFactor(Node* n) {
    if (n == NULL) {
        return 0;
    }
    return height(n->left) - height(n->right);
}

Node* leftRotate(Node* root) {
    Node* newMid = root->right;
    Node* temp = newMid->left;

    // rotation
    newMid->left = root;
    root->right = temp;

    // updating height
    root->height = max(height(root->left), height(root->right)) + 1;
    newMid->height = max(height(newMid->left), height(newMid->right)) + 1;

    // return new root after rotation
    return newMid;
}

Node* rightRotate(Node* root) {
    Node* newMid = root->left;
    Node* temp = newMid->right;

    // rotation
    newMid->right = root;
    root->left = temp;

    // updating height
    root->height = max(height(root->left), height(root->right)) + 1;
    newMid->height = max(height(newMid->left), height(newMid->right)) + 1;

    // return new root after rotation
    return newMid;
}

Node* inorderSucc(Node* root) {
    Node* curr = root;
    while (curr && curr->left != NULL) {
        curr = curr->left;
    }
    return curr;
}

Node* deleteAVL(Node* root, int val) {
    // Normal BST deletion
    if (root == NULL) {
        return NULL;
    }

    if (val < root->data) {
        root->left = deleteAVL(root->left, val);
    } else if (val > root->data) {
        root->right = deleteAVL(root->right, val);
    } else {
        // Node has no child
        if (root->left == NULL and root->right == NULL) {
            return NULL;
        }

        // Node with only one child or no child
        else if (root->left == NULL) {
            struct Node* temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            struct Node* temp = root->left;
            free(root);
            return temp;
        }

        // Node with two children: Get the inorder successor
        // (smallest in the right subtree)
        Node* temp = inorderSucc(root->right);

        // Copy the inorder successor's content to this Node
        root->data = temp->data;

        // Delete the inorder successor
        root->right = deleteAVL(root->right, temp->data);
    }

    if (root == NULL) {
        return root;
    }

    // 2. Update height of ancestor Node
    root->height = max(height(root->left), height(root->right)) + 1;

    // 3. Get the balance factor of the ancestor
    int balance = getBalanceFactor(root);

    // if balanced then simply return
    if (balance <= 1 && balance >= -1) {
        return root;
    }

    // if current Node is unbalanced, then
    // check for 4 cases

    // Left Left case
    if (balance > 1 && getBalanceFactor(root->left) >= 0) {
        return rightRotate(root);
    }

    // Left Right Case
    if (balance > 1 && getBalanceFactor(root->left) < 0) {
        root->left = leftRotate(root->left);
        return rightRotate(root);
    }

    // Right Right Case
    if (balance < -1 && getBalanceFactor(root->right) <= 0) {
        return leftRotate(root);
    }

    // Right Left Case
    if (balance < -1 && getBalanceFactor(root->right) > 0) {
        root->right = rightRotate(root->right);
        return leftRotate(root);
    }
}

Node* deleteNode(Node* root, int data) {
    return deleteAVL(root, data);
}

`
const stepp=`
(aaj wala tough hai step should strictly follow )
step 1: change language to c++

step 2:
/* Node is as follows:

struct Node
{
	int data, height;
	Node *left, *right;
	Node(int x)
	{
		data = x;
		height = 1;
		left = right = NULL;
	}
};

*/
Node* deleteNode(Node* root, int data) 🚩
{🚩
    //add code here,🚩
}🚩
    uper ka 4 line ko bhi hata do  'jiske aaje flag laga huaa hai'
    aar phir paste karo

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
        <h3>DATE:31-aug-2023</h3>
        <p>at 5:47 am</p>
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