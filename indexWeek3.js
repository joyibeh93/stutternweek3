let posts= document.querySelector("#posts")

// Question One instalgram Constructor

function InstalgramPost(instalHandle,content,imageLink,numView,numLikes){
    this.instalHandle =instalHandle,
    this.content=content,
    this.imageLink=imageLink,
    this.numView=numView,
    this.numLikes=numLikes

 
}

const post = new InstalgramPost("Joy","scholarship","alx_image",15,200);

//Question 2 creating an instalgram post

posts.innerHTML=`this is ${post.instalHandle}, with ${post.content} content linked,${post.imageLink} and a ${post.numView} views
    with ${post.numLikes} likes`;


