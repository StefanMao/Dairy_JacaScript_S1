
$(document).ready(function(){

 $('#datepicker').datepicker(); 

 //上傳圖片
 $("#profile-img").change(function(){
       readURL(this);
  });
});

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#profile-img-tag').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }