const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Execution
lab11();

// Function Declaration
async function lab11() {
    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandler object
    const requestHandler = new RequestHandler();

    // Fetch the post by userId and postId
    const post = await requestHandler.getPostById(userId, postId);
    if (post) {
        console.log("\nSpecific Post:");
        post.printPost();
    }

    // Fetch all posts by userId
    const allPosts = await requestHandler.getAllPostsByUserId(userId);
    if (allPosts.length > 0) {
        console.log("\nAll Posts by User:");
        allPosts.forEach(post => post.printPost());
    }
}
