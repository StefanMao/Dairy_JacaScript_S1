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
                if(this.EditIndex === null)
                {
                    loading=true
                    axios.post('http://localhost:8888/Book',this.input).then((res)=>{
                        this.Book.push(res.data)
                        this.CancleHander()
                        loading=false
                        
                    }).catch((err)=>{
                        console.log(err)
                    })
                }
                else{
                    let { id } = this.Book[this.EditIndex]
                    loading = true
                    axios.put('http://localhost:8888/Book/'+ id,this.input).then((res)=>{
                        this.Book[this.EditIndex]=res.data
                        this.CancleHander()
                        loading=false
                    }).catch((err)=>{
                        console.log(err)
                    })

                }
               


            },
            CancleHander(){
                this.EditIndex=null
                this.input.BookType='全部'
                this.input.BookName=''
                this.input.Author=''
            },
            EditHander(index){
                let {BookType , BookName ,Author} =this.Book[index]
                this.input={
                    BookType,
                    BookName,
                    Author
                }
                this.EditIndex=index
                
                

            },
            DeleteHander(index){
                let delete_target=this.Book[index]
                if(confirm(`是否刪除 ${delete_target.BookName} ? `)){
                    this.loading=true
                    axios.delete('http://localhost:8888/Book/'+ delete_target.id).then((res)=>{
                        console.log(res)
                        this.CancleHander() //clear text
                        this.Book.splice(index,1) //資料刪除後會回給一個空物件，故要再刪除array元素
                    this.loading= false
                    }).catch((err)=>{
                        console.log(err)
                    })

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

