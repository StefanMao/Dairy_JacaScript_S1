<script>
import axios from 'axios';

export default {
  name: 'booklist-component',
  data() {
    return {
      loading: false,
      Book: [],
      EditIndex: null,
      input: {
        BookType: '全部',
        BookName: '',
        Author: '',
        FinishDate: '',
      },
    };
  },
  mounted() {
    this.loading = true;
    axios.get('http://localhost:8888/Book')
      .then((res) => {
        console.log(res);
        this.Book = res.data;
        this.loading = false;
      }).catch((err) => {
        console.log(err);
      });
  },
  mothods: {
    inputHandler() {
      if (this.input.title) {
        this.menu.push({
          type: this.input.type,
          title: this.input.title,
          link: 'javascript:;',
        });
        this.input.title = '';
      }
    },

  },
  computed: {
    typemenu() {
      if (this.input.BookType !== '全部') {
        return this.Book.filter((item) => item.BookType === this.input.BookType);
      }
      return this.Book;
    },
    titlemenu() {
      if (this.input.BookName) {
        return this.typemenu.filter((item) => {
          const content = item.BookName.toLowerCase();
          const keyword = this.input.BookName.toLowerCase();
          return content.indexOf(keyword) !== -1;
        });
      }
      return this.typemenu;
    },

  },
};
</script>
<template src="./BL_template.html"></template>
<style src="./BL.css" scoped></style>
