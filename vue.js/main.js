;(function (Vue){

    let book =[]
    new Vue({

        el:"#app",
        data:{
            loading:false,
            Book:[],
            input:{
                BookType:"全部",
                BookName:"",
                Author:"",  
            }
        },
        methods:{
            SubmitHander(){
                //解構賦值
                let {BookType,BookName,Author}=this.input
                if( !BookType || !BookName ||!Author){
                    alert("不可有欄位空白!!")
                    return 
                }
                loading=true
                axios.post('http://localhost:8888/Book',this.input).then((res)=>{
                    this.Book.push(res.data)
                    this.CancleHander()
                    loading=false
                    
                }).catch((err)=>{
                    console.log(err)
                })


            },
            CancleHander(){
               this.input.BookType='全部'
               this.input.BookName=''
               this.input.Author=''
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

