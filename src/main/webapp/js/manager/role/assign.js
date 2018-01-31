/**

 * 
 */
function doAssign(){
	console.log("js/manager/assign.js");
      		var treeObj = $.fn.zTree.getZTreeObj("permissionTree");
      		var nodes = treeObj.getCheckedNodes(true);
            	if ( nodes.length == 0 ) {
                    layer.msg("请选择需要分配的许可数据", {time:2000, icon:5, shift:6});
            	} else {
            		
            		var jsonData = {"roleid":parmaId};
            		$.each(nodes, function(i, n){
            			console.log(n);
            			jsonData["ids["+i+"]"] = n.id;
            		});
            		
            		$.ajax({
            			type : "POST",
            			url  : appPath+"/manager/role/doAssign",
            			data : jsonData,
            			success : function(result) {
            				if ( result.success ) {
            					layer.msg("分配许可数据成功", {time:2000, icon:6});
            				} else {
            					layer.msg("分配许可数据失败", {time:2000, icon:5, shift:6});
            				}
            			}
            		});
            	}
 }
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
			    
			    var setting = {
			    		check: {enable:true},
			    		async: {
			    		    enable: true,
			    		    url:appPath+"/manager/permission/loadAssignTreeDatas?roleid="+parmaId,
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
	                            
	                        }
				    	}
				    };
			    // 异步查询时，ztree不需要准备数据，初始化后，由组件自动读取。
			    $.fn.zTree.init($("#permissionTree"), setting);
			  

			  
});
         