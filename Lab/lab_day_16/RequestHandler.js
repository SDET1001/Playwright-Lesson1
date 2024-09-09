const fetch = require('node-fetch');
const Post = require('./Post');

class RequestHandler {
    async getPostById(userId, postId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${postId}`);
            const data = await response.json();
            if (data.length > 0) {
                return new Post(data[0].userId, data[0].id, data[0].title, data[0].body);
            } else {
                console.log('Post not found.');
                return null;
            }
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    }

    async getAllPostsByUserId(userId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            const data = await response.json();
            return data.map(postData => new Post(postData.userId, postData.id, postData.title, postData.body));
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }
}

module.exports = RequestHandler;
