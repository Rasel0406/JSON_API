const postData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
        .then((res) => res.json())
        .then((data) => displaypost(data))
};
const displaypost = (posts) => {
    const postContainer = document.getElementById("post_container");
    postContainer.innerHTML = "";
    posts.forEach((post) => {
        const div = document.createElement("div")
        div.innerHTML = `
         <div class="post_card">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                    </div>
        `
        postContainer.appendChild(div);

    })

}
postData();