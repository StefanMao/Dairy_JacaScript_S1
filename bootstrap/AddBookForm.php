<!DOCTYPE HTML>
<!--
  Future Imperfect by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
  <head>
    <title>Mao_書籍紀錄網站</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
    <!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
    <!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
  </head>
<body>

  <div class="container">
    <form action="action_page.php">


      <img src="" id="BookImg" height="200" width="200"/>
      <br>
      <br>

      <label for="Books_photo">●書籍圖片</label>
      <input type="text" id="BookImg_src" name="Books_photo" placeholder="請引入書籍圖片來源網址...(網址範例:https://xxx.jpg)" onchange="getBookImage();" onerror="this.src='https://i.imgur.com/EkgYcyW.jpg' ; return false ;">
    
      <br>


    <label for="Books_name">●書籍名稱</label>
    <input type="text" id="fname" name="firstname" placeholder="請輸入書籍名稱...">

    <label for="Author_name">●作者</label>
    <input type="text" id="lname" name="lastname" placeholder="請輸入作者...">
  
    <label for="date">●日期</label>
    <input type='text' class="form-control" id='datepicker' style='width: 300px;' >

    <label for="category">●分類</label>
    <select id="category" name="category">
      <option value="noval">小說</option>
      <option value="business">商業/管理</option>
      <option value="Social">社會/人文</option>
    </select>

    <label for="comment">●評論/心得</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
</div>


</body>
  