let postContainer = document.getElementById("post-container");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((posts) => {
        postContainer.innerHTML = "";

        posts.forEach((post) => {
            let postElement = document.createElement("div");
            postElement.className = "post-card";
            postElement.addEventListener("click", () => {
                window.location.href = `post-details.html?id=${post.id}`;
            });

            const truncatedBody =
                post.body.length > 150
                    ? post.body.substring(0, 150) + "..."
                    : post.body;

            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${truncatedBody}</p>
                <div class="post-meta">
                    <span class="post-id">Post #${post.id}</span>
                    <a href="post-details.html?id=${post.id}" class="read-more">Read More</a>
                </div>
            `;

            postContainer.appendChild(postElement);
        });
    })
    .catch((error) => {
        postContainer.innerHTML = `
            <div class="error">
                <h3>Error Loading Posts</h3>
                <p>${error.message}</p>
            </div>
        `;
    });

if (window.location.pathname.includes("post-details.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    if (postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((post) => {
                let postDetails = document.getElementById("post-details");
                const currentDate = new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });

                postDetails.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <div class="post-details-meta">
                        <span class="post-details-id">Post #${post.id}</span>
                        <span class="post-details-date">Published on ${currentDate}</span>
                    </div>
                `;
            })
            .catch((error) => {
                let postDetails = document.getElementById("post-details");
                postDetails.innerHTML = `
                    <div class="error">
                        <h3>Error Loading Post Details</h3>
                        <p>${error.message}</p>
                    </div>
                `;
            });
    } else {
        let postDetails = document.getElementById("post-details");
        postDetails.innerHTML = `
            <div class="error">
                <h3>Post Not Found</h3>
                <p>No post ID was provided in the URL.</p>
            </div>
        `;
    }
}
