class Post {
    constructor(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    printPost() {
        console.log(`Post ID: ${this.id}`);
        console.log(`User ID: ${this.userId}`);
        console.log(`Title: ${this.title}`);
        console.log(`Body: ${this.body}`);
    }
}

module.exports = Post;
