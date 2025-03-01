document.addEventListener("alpine:init", () => {
    Alpine.data("fetchPostsAndUsers", () => ({
        posts: [],
        users: [],
        async init() {
            try {
                console.log("Fetching data...");
                const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
                this.posts = await postResponse.json();
                console.log("Posts fetched:", this.posts);

                const userResponse = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
                this.users = await userResponse.json();
                console.log("Users fetched:", this.users);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }));
});