require('dotenv').config();
module.exports = {
	MONGO_URI: `mongodb+srv://hyunwoo:${process.env.DB_PW}@cluster0.v0gfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};
