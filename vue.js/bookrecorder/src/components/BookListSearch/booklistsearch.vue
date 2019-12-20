<script>
import axios from 'axios'
export default {
  name: 'booklist-component',
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
    axios.get('http://localhost:8888/Book')
      .then((res) => {
        console.log(res)
        this.Book = res.data
        this.loading = false
      }).catch((err) => {
        console.log(err)
      })
  },
  mothods: {
    inputHandler () {
      if (this.input.title) {
        this.menu.push({
          type: this.input.type,
          title: this.input.title,
          link: 'javascript:;'
        })
        this.input.title = ''
      }
    }

  },
  computed: {
    typemenu () {
      if (this.input.BookType !== '全部') {
        return this.Book.filter(item => {
          return item.BookType === this.input.BookType
        })
      } else {
        return this.Book
      }
    },
    titlemenu () {
      if (this.input.BookName) {
        return this.typemenu.filter(item => {
          let content = item.BookName.toLowerCase()
          let keyword = this.input.BookName.toLowerCase()
          return content.indexOf(keyword) !== -1
        })
      } else {
        return this.typemenu
      }
    }

  }
}
</script>
<template src="./BL_template.html"></template>
<style src="./BL.css" scoped></style>
