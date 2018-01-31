<!-- 记住的 -->
<%@page pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <link rel="stylesheet" href="${APP_PATH}/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="${APP_PATH}/css/font-awesome.min.css">
    <link rel="stylesheet" href="${APP_PATH}/css/main.css">
    <link rel="stylesheet" href="${APP_PATH}/css/doc.min.css">
    <style>
    .tree li {
        list-style-type: none;
        cursor:pointer;
    }
    </style>
  </head>

  <body>

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
            <div><a class="navbar-brand" style="font-size:32px;" href="user.html">众筹平台 - 用户维护</a></div>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li style="padding-top:8px;">
                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-success dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-user"></i> 张三 <span class="caret"></span>
                  </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#"><i class="glyphicon glyphicon-cog"></i> 个人设置</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-comment"></i> 消息</a></li>
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="glyphicon glyphicon-off"></i> 退出系统</a></li>
                      </ul>
                </div>
            </li>
            <li style="margin-left:10px;padding-top:8px;">
                <button type="button" class="btn btn-default btn-danger">
                  <span class="glyphicon glyphicon-question-sign"></span> 帮助
                </button>
            </li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
            <div class="tree">
                <ul style="padding-left:0px;" class="list-group">
                    <li class="list-group-item tree-closed" >
                        <a href="main.html"><i class="glyphicon glyphicon-dashboard"></i> 控制面板</a> 
                    </li>
                    <li class="list-group-item">
                        <span><i class="glyphicon glyphicon glyphicon-tasks"></i> 权限管理 <span class="badge" style="float:right">3</span></span> 
                        <ul style="margin-top:10px;">
                            <li style="height:30px;">
                                <a href="${APP_PATH}/manager/user/index" style="color:red;"><i class="glyphicon glyphicon-user"></i> 用户维护</a> 
                            </li>
                            <li style="height:30px;">
                                <a href="${APP_PATH}/manager/role/index"><i class="glyphicon glyphicon-certificate"></i> 角色维护</a> 
                            </li>
                            <li style="height:30px;">
                                <a href="permission.html"><i class="glyphicon glyphicon-lock"></i> 许可维护</a> 
                            </li>
                        </ul>
                    </li>
                    <li class="list-group-item tree-closed">
                        <span><i class="glyphicon glyphicon-ok"></i> 业务审核 <span class="badge" style="float:right">3</span></span> 
                        <ul style="margin-top:10px;display:none;">
                            <li style="height:30px;">
                                <a href="auth_cert.html"><i class="glyphicon glyphicon-check"></i> 实名认证审核</a> 
                            </li>
                            <li style="height:30px;">
                                <a href="auth_adv.html"><i class="glyphicon glyphicon-check"></i> 广告审核</a> 
                            </li>
                            <li style="height:30px;">
                                <a href="auth_project.html"><i class="glyphicon glyphicon-check"></i> 项目审核</a> 
                            </li>
                        </ul>
                    </li>
                    <li class="list-group-item tree-closed">
                        <span><i class="glyphicon glyphicon-th-large"></i> 业务管理 <span class="badge" style="float:right">7</span></span> 
                        <ul style="margin-top:10px;display:none;">
                            <li style="height:30px;">
                                <a href="cert.html"><i class="glyphicon glyphicon-picture"></i> 资质维护</a> 
                            </li>
                            <li style="height:30px;">
                                <a href="type.html"><i class="glyphicon glyphicon-equalizer"></i> 分类管理</a> 
                            </li>
                            <li style="height:30px;">
                                <a href="process.html"><i class="glyphicon glyphicon-random"></i> 流程管理</a> 
                            </li>
                            <li style="height:30px;">
                                <a href="advertisement.html"><i class="glyphicon glyphicon-hdd"></i> 广告管理</a> 
                            </li>
                            <li style="height:30px;">
                                <a href="message.html"><i class="glyphicon glyphicon-comment"></i> 消息模板</a> 
                            </li>
                            <li style="height:30px;">
                                <a href="project_type.html"><i class="glyphicon glyphicon-list"></i> 项目分类</a> 
                            </li>
                            <li style="height:30px;">
                                <a href="tag.html"><i class="glyphicon glyphicon-tags"></i> 项目标签</a> 
                            </li>
                        </ul>
                    </li>
                    <li class="list-group-item tree-closed" >
                        <a href="param.html"><i class="glyphicon glyphicon-list-alt"></i> 参数管理</a> 
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <ol class="breadcrumb">
                  <li><a href="#">首页</a></li>
                  <li><a href="#">数据列表</a></li>
                  <li class="active">分配角色</li>
                </ol>
            <div class="panel panel-default">
              <div class="panel-body">
                <form role="form" class="form-inline">
                  <div class="form-group">
                    <label for="exampleInputPassword1">未分配角色列表</label><br>
                    <!-- size 表示的显示的列表数量 -->
                    <select id="leftList" class="form-control" multiple size="10" style="width:200px;overflow-y:auto;">
                        <c:forEach items="${unassignRoleList}" var="role">
                            <option value="${role.id}">${role.name}</option>
                        </c:forEach>
                    </select>
                  </div>
                  <div class="form-group">
                        <ul>
                            <li id="left2RightBtn" class="btn btn-default glyphicon glyphicon-chevron-right"></li>
                            <br>
                            <li id="right2LeftBtn" class="btn btn-default glyphicon glyphicon-chevron-left" style="margin-top:20px;"></li>
                        </ul>
                  </div>
                  <div class="form-group" style="margin-left:40px;">
                    <label for="exampleInputPassword1">已分配角色列表</label><br>
                    <select id="rightList" class="form-control" multiple size="10" style="width:200px;overflow-y:auto;">
                        <c:forEach items="${assignRoleList}" var="role">
                            <option value="${role.id}">${role.name}</option>
                        </c:forEach>
                    </select>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <h4 class="modal-title" id="myModalLabel">帮助</h4>
          </div>
          <div class="modal-body">
            <div class="bs-callout bs-callout-info">
                <h4>测试标题1</h4>
                <p>测试内容1，测试内容1，测试内容1，测试内容1，测试内容1，测试内容1</p>
              </div>
            <div class="bs-callout bs-callout-info">
                <h4>测试标题2</h4>
                <p>测试内容2，测试内容2，测试内容2，测试内容2，测试内容2，测试内容2</p>
              </div>
          </div>
          <!--
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
          -->
        </div>
      </div>
    </div>
    <script src="${APP_PATH}/jquery/jquery-2.1.1.min.js"></script>
    <script src="${APP_PATH}/bootstrap/js/bootstrap.min.js"></script>
    <script src="${APP_PATH}/script/docs.min.js"></script>
    <!-- 后来增加的 -->
    <script src="${APP_PATH}/layer/layer.js"></script>
        <script type="text/javascript">
            $(function () {
                $(".list-group-item").click(function(){
                    if ( $(this).find("ul") ) {
                        $(this).toggleClass("tree-closed");
                        if ( $(this).hasClass("tree-closed") ) {
                            $("ul", this).hide("fast");
                        } else {
                            $("ul", this).show("fast");
                        }
                    }
                });
                //点击按钮
                $("#left2RightBtn").click(function(){
                	//左边列表所选中的  #leftList之后，的子标签:selected表示所选中的选项
                	var selOpts = $("#leftList :selected");
                //边界条件判断
                	if ( selOpts.length == 0 ) {
                		layer.msg("请选择需要分配的角色信息", {time:1500, icon:5, shift:6});
                	} else {
                		//将左边移动到右边
                		var jsonData = {"userid" : "${user.id}"};
                		//ajax批量id, i 表示索引， n 表示当前的元素， 将setOpts 为什么value
                		$.each(selOpts, function(i, n){
                			jsonData["ids["+i+"]"] = n.value;
                		});
                		//没有特殊的含义，表示没有被加载
                		var loadingIndex = -1;
                		
                		$.ajax({
                			type : "POST",
                			url  : "${APP_PATH}/manager/user/assignRole",
                			data : jsonData,
                			beforeSend : function() {
                				loadingIndex = layer.load(2, {time: 10*1000});
                			},
                			success : function(result) {
                				layer.close(loadingIndex);
                				if ( result.success ) {
                					//移动选项
                					$("#rightList").append(selOpts);
                				} else {
                					//提示用户
                					layer.msg("分配角色信息失败", {time:1500, icon:5, shift:6});
                				}
                			}
                		});
                	}
                });
                //和左边的一样
                //从右边到左边
                $("#right2LeftBtn").click(function(){
                	var selOpts = $("#rightList :selected");
                    if ( selOpts.length == 0 ) {
                        layer.msg("请选择需要取消分配的角色信息", {time:1500, icon:5, shift:6});
                    } else {
                    	//后台保存成user了
                        var jsonData = {"userid" : "${user.id}"};
                        $.each(selOpts, function(i, n){
                            jsonData["ids["+i+"]"] = n.value;
                        });
                        
                        var loadingIndex = -1;
                        
                        $.ajax({
                            type : "POST",
                            url  : "${APP_PATH}/manager/user/unassignRole",
                            data : jsonData,
                            beforeSend : function() {
                                loadingIndex = layer.load(2, {time: 10*1000});
                            },
                            success : function(result) {
                                layer.close(loadingIndex);
                                if ( result.success ) {
                                	//移动选项
                                	$("#leftList").append(selOpts);
                                } else {
                                    layer.msg("取消分配角色信息失败", {time:1500, icon:5, shift:6});
                                }
                            }
                        });
                    }
                });
            });
        </script>
  </body>
</html>
