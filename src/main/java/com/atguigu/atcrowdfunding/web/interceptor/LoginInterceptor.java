package com.atguigu.atcrowdfunding.web.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.atguigu.atcrowdfunding.common.bean.User;

public class LoginInterceptor extends LoginInterceptorAdapter {
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		// 获取用户的请求路径
		// /test/test.jsp
		String uri = request.getRequestURI();
		System.out.println("uri = " + uri);
		// http://127.0.0.1/test/test.jsp
		//StringBuffer sb = request.getRequestURL();
		//StringBuilder
		
		// 从session中获取用户信息
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("loginUser");
		
		// 判断用户是否登陆
		if ( user == null ) {
			// 如果没有登陆，不能继续访问，跳转到登陆页面
			response.sendRedirect("/login");
			return false;
		} else {
			// 如果已经登陆，那么请求继续执行
			return true;
		}	
		
		// 白名单
		/*
		Set<String> whiteNamesSet = new HashSet<String>();
		whiteNamesSet.add("/login");
		whiteNamesSet.add("/dologin");
		whiteNamesSet.add("/index");
		
		
		if ( whiteNamesSet.contains(uri) ) {
			return true;
		} else {
			// 判断用户是否登陆
			if ( user == null ) {
				// 如果没有登陆，不能继续访问，跳转到登陆页面
				response.sendRedirect("/login");
				return false;
			} else {
				// 如果已经登陆，那么请求继续执行
				return true;
			}			
		}
		*/
		
	}
}
