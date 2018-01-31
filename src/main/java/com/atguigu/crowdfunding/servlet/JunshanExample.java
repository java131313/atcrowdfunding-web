package com.atguigu.crowdfunding.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class JunshanExample extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public JunshanExample() {
        super();
        
    }

	/**
	 * 测试字符编码
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String pathInfo = request.getPathInfo();
		String queryString = request.getQueryString();
		ClassLoader loader = this.getClass().getClassLoader();
		while(loader != null) {
			System.out.println(loader.getClass().getCanonicalName());
			ClassLoader parent = loader.getParent();
			System.out.println(parent);
		}
		System.out.println("pathInfo:"+pathInfo +"queryString:"+ queryString);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
