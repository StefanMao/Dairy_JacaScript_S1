<script>
import axios from 'axios'
export default {
  name: 'bookmanage-component',
  data () {
    return {
      loading: false,
      Book: [],
      EditIndex: null,
      input: {
        BookType: '全部',
        BookName: '',
        Author: '',
        FinishDate: ''
      }
    }
  },
  mounted () {
    this.loading = true
    axios.get('http://localhost:8888/Book').then((res) => {
      console.log(res)
      this.Book = res.data
      this.loading = false
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    SubmitHander () {
      let { BookType, BookName, Author, FinishDate } = this.input
      if (!Author || !BookName || !FinishDate) {
        alert('不可有欄位空白!!')
        return
      }
      if (this.EditIndex === null) {
        this.loading = true
        axios.post('http://localhost:8888/Book', this.input).then((res) => {
          this.Book.push(res.data)
          this.CancleHander()
          this.loading = false
        }).catch((err) => {
          console.log(err)
        })
      } else {
        let { id } = this.Book[this.EditIndex]
        this.loading = true
        axios.put('http://localhost:8888/Book/' + id, this.input).then((res) => {
          this.Book[this.EditIndex] = res.data
          this.CancleHander()
          this.loading = false
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    CancleHander () {
      this.EditIndex = null
      this.input.BookType = '全部'
      this.input.BookName = ''
      this.input.Author = ''
      this.input.FinishDate = ''
    },
    EditHander (index) {
      let { BookType, BookName, Author, FinishDate } = this.Book[index]
      this.input = {
        BookType,
        BookName,
        Author,
        FinishDate
      }
      this.EditIndex = index
    },
    DeleteHander (index) {
      let deletetarget = this.Book[index]
      if (confirm(`是否刪除 ${deletetarget.BookName} ? `)) {
        this.loading = true
        axios.delete('http://localhost:8888/Book/' + deletetarget.id).then((res) => {
          console.log(res)
          this.CancleHander() //  clear text
          this.Book.splice(index, 1)//  資料刪除後會回給一個空物件，故要再刪除array元素
          this.loading = false
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>
<template src="./Bm_template.html"></template>
<style src="./Bm.css" scoped></style>
