function openMenu() {
  document.getElementById("top-menu").style.visibility = "visible";
  document.getElementById("menu-icon").style.visibility = "hidden";
  document.getElementById("exit-menu-icon").style.visibility = "visible";
}
function closeMenu() {
  document.getElementById("top-menu").style.visibility = "hidden";
  document.getElementById("menu-icon").style.visibility = "visible";
  document.getElementById("exit-menu-icon").style.visibility = "hidden";
}

const getPost = async () => {
  const reps = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await reps.json();
  renderPost(data);
};

const renderPost = data => {
  const renderData = data.map(post => {
    return `
    <div>
    <div class="single-post">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <p>User id: ${post.userId}</p>
    </div>
    <div class="button-post">
      <button>Edit</button>
      <button>Delete</button>
    </div></div>`
    ;
  });
  document.getElementById("content").innerHTML = renderData.join("");
};

getPost();
