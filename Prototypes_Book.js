function Books (bookname , author, category,comment){

	this.bookname = bookname
	this.author = author
	this.category = category
	this.comment = comment
	

}

Books.prototype.log=function(comment)
{
	console.log(`This is ${this.bookname} by ${this.author} .`)
}


var newbook = new Books('情商課','蔡康永','人文','好看')

newbook.log()