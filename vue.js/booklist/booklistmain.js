;(function (Vue){

    let book =[]
    new Vue({

        el:"#app",
        data:{
            loading:false,
            Book:[],
            EditIndex:null,
            input:{
                BookType:"全部",
                BookName:"",
                Author:"",
                Finish_Date:"",
            }
        },
        mothods:{
            inputHandler(){
                if(this.input.title)
                    {
                     this.menu.push({
                        type:this.input.type,
                        title:this.input.title,
                        link:'javascript:;'
                     })
                      this.input.title=''
                    }
                      }

        },
        computed:{
            typemenu(){
                 if(this.input.BookType !== '全部'){
                    return this.Book.filter(item =>{
                    
                        return item.BookType == this.input.BookType
                })               
                             }else{
                                return this.Book 
                             }
                    },
            titlemenu(){
                 if(this.input.BookName){
                    return this.typemenu.filter(item => {
                        let content = item.BookName.toLowerCase()
                        let keyword = this.input.BookName.toLowerCase()
                        return content.indexOf(keyword) != -1
                    })
                    }else{
                          return this.typemenu
                    }
                      }

        },
        mounted(){
            this.loading=true
            axios.get('http://localhost:8888/Book')
            .then((res)=>{
                console.log(res)
                this.Book=res.data
                this.loading=false
            }).catch((err)=>{
                console.log(err)
            })

        }

    })

}(Vue))


//  let vm = new Vue ({

//     el:'#app',
//     data: data,
//     methods:{
//         inputHandler(){
            
//             if(this.input.title)
//             {
//                 this.menu.push({
//                     type:this.input.type,
//                     title:this.input.title,
//                     link:'javascript:;'
//                 })
//                 this.input.title=''
//             }
//         }
//     },
//     computed:{
//         typemenu(){
//             if(this.input.type !== '全部'){
//                 return this.menu.filter(item =>{
//                     return item.type == this.input.type
//                 })               
//             }else{
//                 return this.menu  
//             }
//         },
//         titlemenu(){
//             if(this.input.title){
//               return this.typemenu.filter(item => {
//               let content = item.title.toLowerCase()
//               let keyword = this.input.title.toLowerCase()
//               return content.indexOf(keyword) != -1
//             })
//             }else{
//                 return this.typemenu
//             }
//         }
//     }


    

//  })

