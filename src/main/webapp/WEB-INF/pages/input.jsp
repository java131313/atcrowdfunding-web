<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>input页面</h1>
	<form action="product-input.action" method="post">
		 ProductName:<input type="text" name="ProductName" >
		 <br/> <br/>
		  ProductDesc:<input type="text" name="ProductDesc" >
		 <br/> <br/>
		 	  ProductPrice:<input type="text" name="ProductPrice" >
		  <br/> <br/>
		  	<input type="submit" value="Submit" />
		   <br/> <br/>
	</form>
</body>
</html>