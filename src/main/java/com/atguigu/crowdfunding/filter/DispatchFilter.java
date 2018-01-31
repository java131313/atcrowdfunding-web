package com.atguigu.crowdfunding.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;


public class DispatchFilter implements Filter {

    /**
     * Default constructor. 
     */
    public DispatchFilter() {
      
    }

	
	public void destroy() {
		
	}

	
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest)request;
		//解析请求
		//1.获取servlet path
		String servletpath = req.getServletPath();
		//request.get
		System.out.println(servletpath);
		// 重新使用path
		String path = null;
		//2.判断servletPath
		///WEB-INF/pages/input.jsp
		if(servletpath.equals("/product-input.action")) {
			path = "/WEB-INF/pages/input.jsp";
		}
		//若其等于"/product-save.action",则
		if(servletpath.equals("/product-save.action")) {
			path = "/WEB-INF/pages/input.jsp";
		}
		/**
		 * 1). 获取请求参数 
		 */
		//	String productName = request.getParameter("ProductName");
		//	String ProductDesc = request.getParameter("ProductDesc");
		//	String ProductPrice = request.getParameter("ProductPrice");
		/**
		 * 2）.把请求信息封装到为一个Product对象中
		 * 3). 执行保持工作
		 * 4）.把Product对象保存到（request）（数据库）中 ${param.productName} -> ${requestScope.product.productName}
		 * 
		 */
		if(path != null) {
			request.getRequestDispatcher(path).forward(request, response);
			return;
		}
		chain.doFilter(request, response);
	}

		//3.若其等于"product-save.action",则
	public void init(FilterConfig fConfig) throws ServletException {
		
	}

}
