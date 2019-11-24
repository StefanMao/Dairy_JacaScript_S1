# JavaScript Prototypes



# 文獻參考
1.You Don_t Know JS - This _ Object Prototypes , Chapter5 Prototypes

# 範例 
 建立出一個建構子 Book 並產出實體，測試執行。 

      function Books (bookname , author, category,comment){
        this.bookname = bookname //書名
        this.author = author //作者
        this.category = category //分類
        this.comment = comment //心得
      }

      Books.prototype.log=function(comment)
        {
          console.log(`This is ${this.bookname} by ${this.author} .`)
        }
        
      var newbook = new Books('情商課','蔡康永','人文','好看')
      newbook.log()
