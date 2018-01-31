package com.atguigu.atcrowdfunding.web.interceptor;

import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.atguigu.atcrowdfunding.common.constant.AttrConst;



/**
 * 权限拦截器
 * 对用户的访问路径进行权限控制
 * 1）判断当前的访问路径是否需要进行权限验证
 * 2-1）如果不需要验证，直接通过
 * 2-2）如果需要验证，就开始进行验证
 * 3）获取用户的访问权限列表
 * 4）判断当前路径是否在用户的权限列表中
 * 5-1）如果在列表中，可以继续访问
 * 5-2）如果不在列表中，跳转到错误页面
 * @author 18801
 *
 */
public class AuthInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		// 1）判断当前的访问路径是否需要进行权限验证
		// 获取权限表中所有的权限路径（url）
		ServletContext application = request.getSession().getServletContext();
		Set<String> authSet = (Set<String>)application.getAttribute(AttrConst.APP_AUTH_SET);
		
		String uri = request.getRequestURI();
		
		if ( authSet.contains(uri) ) {
			// 如果需要验证，就开始进行验证
			// 获取用户的访问权限列表
			Set<String> userAuthSet = (Set<String>)request.getSession().getAttribute(AttrConst.SESS_USER_AUTH_SET);
			if ( userAuthSet.contains(uri) ) {
				// 如果在列表中，可以继续访问
				return true;
			} else {
				// 如果不在列表中，跳转到错误页面
				response.sendRedirect("/error");
				return false;
			}
		} else {
			return true;
		}
	}

}
