const dataLoad = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data))
};
const displayData = (posts) => {
posts.forEach((post)=>{
    console.log(post);
});
}