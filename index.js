const post = document.getElementById("post");
post.addEventListener("click", function() {
    const commentBoxValue = document.getElementById("comment-box").value;
    const name = document.getElementById("name").value;
    const li = document.createElement("li");
    const h4 = document.createElement("h4")
    const text = document.createTextNode(commentBoxValue);
    const name2 = document.createTextNode(name);
    h4.appendChild(name2);
    li.appendChild(text);
document.getElementById("unordered").appendChild(h4);
    document.getElementById("unordered").appendChild(li);
   
})