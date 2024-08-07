const readline = require('readline');
const fetch = require('node-fetch'); // Import node-fetch

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get post by userId and postId
function getPostById(userId, postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${postId}`)
        .then(response => response.json())
        .then(posts => {
            if (posts.length > 0) {
                console.log('Post Content:');
                console.log(posts[0]);
            } else {
                console.log('Post not found.');
            }
        })
        .catch(error => {
            console.error('Error fetching post:', error);
        });
}

// Function to get all posts by userId
function getAllPostsByUserId(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            if (posts.length > 0) {
                console.log('All Posts:');
                posts.forEach(post => {
                    console.log(post);
                });
            } else {
                console.log('No posts found for this user.');
            }
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}

// Main function to interact with user
function main() {
    rl.question('Enter userId: ', userId => {
        rl.question('Enter postId: ', postId => {
            getPostById(userId, postId).then(() => {
                getAllPostsByUserId(userId).then(() => {
                    rl.close();
                });
            });
        });
    });
}

main();
