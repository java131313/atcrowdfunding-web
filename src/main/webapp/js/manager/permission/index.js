/**
 * 
 */
 $(function () {
          
            	 console.log("permission/index.jsp");
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
			    
			    var setting = {
			    		async: {
			    		    enable: true,
			    		    url:appPath+"/manager/permission/loadAsyncTreeDatas",
			    		    autoParam:["id", "name=n", "level=lv"]
			    		},
				    	view : {
	                        selectedMulti: false,
	                        addDiyDom: function(treeId, treeNode){
	                        	// treeNode其实就是后台传递的JSON对象，只不过ztree组件会自动添加一些属性
	                            var icoObj = $("#" + treeNode.tId + "_ico");
	                        	//icon后台是字符串型的。“” underfine, treeNode.icon可以是字符串可以是json
	                            if ( treeNode.icon ) {
	                                icoObj.removeClass("button ico_docu ico_open").addClass(treeNode.icon).css("background","");
	                            }
	                            
	                        },
	                        //表示鼠标悬停
	                        addHoverDom: function(treeId, treeNode){  
	                            //   <a><span></span></a>   treeNode当前树形节点的数据
	                                var aObj = $("#" + treeNode.tId + "_a"); // tId = permissionTree_1, ==> $("#permissionTree_1_a")
	                                aObj.attr("href", "javascript:;");
	                                if (treeNode.editNameFlag || $("#btnGroup"+treeNode.tId).length>0) return;
	                                var s = '<span id="btnGroup'+treeNode.tId+'">';
	                                if ( treeNode.level == 0 ) {
	                                    s += '<a class="btn btn-info dropdown-toggle btn-xs" onclick="window.location.href=\''+appPath+'/manager/permission/add?id='+treeNode.id+'\'" style="margin-left:10px;padding-top:0px;" href="javascript:;" >&nbsp;&nbsp;<i class="fa fa-fw fa-plus rbg "></i></a>';
	                                } else if ( treeNode.level == 1 ) {
	                                    s += '<a class="btn btn-info dropdown-toggle btn-xs" onclick="window.location.href=\''+appPath+'/manager/permission/edit?id='+treeNode.id+'\'" style="margin-left:10px;padding-top:0px;"  href="javascript:;" title="修改权限信息">&nbsp;&nbsp;<i class="fa fa-fw fa-edit rbg "></i></a>';
	                                    if (treeNode.children.length == 0) {
	                                        s += '<a class="btn btn-info dropdown-toggle btn-xs" onclick="deletePermission('+treeNode.id+', \''+treeNode.name+'\')" style="margin-left:10px;padding-top:0px;" href="javascript:;" >&nbsp;&nbsp;<i class="fa fa-fw fa-times rbg "></i></a>';
	                                    }
	                                    s += '<a class="btn btn-info dropdown-toggle btn-xs" onclick="window.location.href=\''+appPath+'/manager/permission/add?id='+treeNode.id+'\'" style="margin-left:10px;padding-top:0px;" href="#" >&nbsp;&nbsp;<i class="fa fa-fw fa-plus rbg "></i></a>';
	                                } else if ( treeNode.level == 2 ) {
	                                    s += '<a class="btn btn-info dropdown-toggle btn-xs" onclick="window.location.href=\''+appPath+'/manager/permission/edit?id='+treeNode.id+'\'" style="margin-left:10px;padding-top:0px;"  href="#" title="修改权限信息">&nbsp;&nbsp;<i class="fa fa-fw fa-edit rbg "></i></a>';
	                                    s += '<a class="btn btn-info dropdown-toggle btn-xs" onclick="deletePermission('+treeNode.id+',\''+treeNode.name+'\')" style="margin-left:10px;padding-top:0px;" href="#">&nbsp;&nbsp;<i class="fa fa-fw fa-times rbg "></i></a>';
	                                }
	                
	                                s += '</span>';
	                                aObj.after(s);
	                            },
	                            //表示鼠标离开
	                            removeHoverDom: function(treeId, treeNode){
	                                $("#btnGroup"+treeNode.tId).remove();
	                            }
				    	}
				    };
			  
			    $.ajax({
			    	type : "POST",
			    	url  : appPath+"/manager/permission/loadTreeDatas",
			    	success : function( result ) {
			    		if ( result.success ) {
			    			// 将后台生成的JSON数据使用树形插件进行渲染
			    			$.fn.zTree.init($("#permissionTree"), setting, result.data);
			    		}
			    	}
			    });
			  
			    
            });
            function deletePermission( id, name ) {
            	layer.confirm("删除许可信息["+name+"]，是否继续？",  {icon: 3, title:'提示'}, function(cindex){
            		
                    $.ajax({
                        type : "POST",
                        url  : appPath+"/manager/permission/delete",
                        data : {
                            "id" : id
                        },
                        success : function(result) {
                            if ( result.success ) {
                                layer.msg("许可信息删除成功", {time:1500, icon:6}, function(){
                                	var treeObj = $.fn.zTree.getZTreeObj("permissionTree");
                                	treeObj.reAsyncChildNodes(null, "refresh");
                                });
                            } else {
                                layer.msg("许可信息删除失败", {time:1500, icon:5, shift:6});
                            }
                        }
                    });
            		
            		layer.close(cindex);
                }, function(cindex){
                    layer.close(cindex);
                });
            }