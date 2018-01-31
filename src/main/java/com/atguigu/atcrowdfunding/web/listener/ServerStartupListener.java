package com.atguigu.atcrowdfunding.web.listener;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.atguigu.atcrowdfunding.common.bean.Permission;
import com.atguigu.atcrowdfunding.common.constant.AttrConst;
import com.atguigu.atcrowdfunding.common.util.StringUtil;
import com.atguigu.atcrowdfunding.manager.service.PermissionService;

public class ServerStartupListener implements ServletContextListener {

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		// 将web应用路径保存到Application范围中
		
				// 获取Web应用对象 - Application
				ServletContext application = sce.getServletContext();
				
				// Web应用路径
				String path = application.getContextPath();
				
				// 设置
				application.setAttribute("APP_PATH", path);
				// 获取Spring环境对象
				ApplicationContext context = 
						WebApplicationContextUtils.getWebApplicationContext(application);
				
				// 获取权限表中所有的权限路径
				PermissionService permissionService = context.getBean(PermissionService.class);
				
				List<Permission> allPermissions = permissionService.queryAll();
				
				Set<String> authPathSet = new HashSet<String>();
				
				for ( Permission permission : allPermissions ) {
					if ( !StringUtil.isEmpty(permission.getUrl()) ) {
						authPathSet.add(permission.getUrl());
					}
				}
				
				application.setAttribute(AttrConst.APP_AUTH_SET, authPathSet);
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub

	}

}
