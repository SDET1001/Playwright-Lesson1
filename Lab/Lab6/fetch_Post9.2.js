const readline = require('readline');
const fetch = require('node-fetch'); // Thư viện node-fetch

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Hàm để lấy bài viết theo userId và postId
async function getPostById(userId, postId) {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${postId}`;
    try {
        const response = await fetch(url);
        const posts = await response.json();
        if (posts.length > 0) {
            console.log('Post Content:');
            console.log(posts[0]);
        } else {
            console.log('Post not found.');
        }
    } catch (error) {
        console.error('Error fetching post:', error);
    }
}

// Hàm để lấy tất cả bài viết theo userId
async function getAllPostsByUserId(userId) {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    try {
        const response = await fetch(url);
        const posts = await response.json();
        if (posts.length > 0) {
            console.log('All Posts:');
            posts.forEach(post => {
                console.log(post);
            });
        } else {
            console.log('No posts found for this user.');
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Hàm chính để xử lý nhập liệu từ người dùng và gọi các hàm trên
async function main() {
    rl.question('Enter userId: ', async (userId) => {
        rl.question('Enter postId: ', async (postId) => {
            await getPostById(userId, postId);
            await getAllPostsByUserId(userId);
            rl.close();
        });
    });
}

main();
