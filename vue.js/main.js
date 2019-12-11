(function (){



 let data ={

    input:{
        type:'工程',
        title:''
    },
    menu:[
        {type : '工程' ,title:' Big JAVA BOOK' , link:'javascript:;'},
        {type : '文學' ,title:' 情商課' , link:'javascript:;'},
        {type : '哲學' ,title:'蘇菲的世界' , link:'javascript:;'},
        {type : '兒童故事書' ,title:'格林童話' , link:'javascript:;'},
        {type : '語言' ,title:'多益單字本' , link:'javascript:;'}
    ]
 }

 let vm = new Vue ({

    el:'#app',
    data: data,
    methods:{
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

    }

 })

}())