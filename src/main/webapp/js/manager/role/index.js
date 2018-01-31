/**
 * 
 */
 function changePageno( pageno ) {
            	pageQuery(pageno);
 }
            
            function pageQuery(pageno) {
            	var loadingIndex = -1;
            	// 使用AJAX异步分页查询角色数据
            	
            	var obj = {
           			"pageno" : pageno,
           			"pagesize" : 10
            	};
            	if ( cond ) {
            		// 增加模糊查询参数
            		obj.pagetext = $("#queryText").val();
            	}
            	
            	$.ajax({
            		url : appPath+"/manager/role/pageQuery",
            		type : "POST",
            		data : obj,
            		beforeSend : function() {
            			loadingIndex = layer.msg('数据查询中', {icon: 16});
            			return true;
            		},
            		success : function( result ) {
            			layer.close(loadingIndex);
            			if ( result.success ) {
            				var pageObj = result.data;
            				var roleList = pageObj.datas;
            				
            				var content = "";
            				$.each(roleList, function(i, role){
             				   content = content +  '<tr>';
          	                   content = content +  '  <td>'+(i+1)+'</td>';
          					   content = content +  '  <td><input type="checkbox" value="'+role.id+'"></td>';
          	                   content = content +  '  <td>'+role.name+'</td>';
          	                   content = content +  '  <td>';
          					   content = content +  '      <button type="button" onclick="window.location.href=\''+appPath+'/manager/role/assign?id='+role.id+'\'" class="btn btn-success btn-xs"><i class=" glyphicon glyphicon-check"></i></button>';
          					   content = content +  '      <button type="button" onclick="window.location.href=\''+appPath+'/manager/role/edit?pageno='+pageObj.pageno+'&id='+role.id+'\'" class="btn btn-primary btn-xs"><i class=" glyphicon glyphicon-pencil"></i></button>';
          					   content = content +  '	   <button type="button" onclick="deleteUser('+role.id+', \''+role.name+'\')" class="btn btn-danger btn-xs"><i class=" glyphicon glyphicon-remove"></i></button>';
          					   content = content +  '  </td>';
          	                   content = content +  '</tr>';
            				});
            				
            				var pageContent = "";
            				
            				if ( pageObj.pageno != 1 ) {
            					pageContent = pageContent + '<li><a href="#" onclick="changePageno('+(pageObj.pageno-1)+')">上一页</a></li>';
            				}
            				for ( var i = 1; i <= pageObj.totalno; i++ ) {
            					if ( i == pageObj.pageno ) {
            						pageContent = pageContent + '<li class="active"><a href="#" onclick="changePageno('+i+')">'+i+'</a></li>';	
            					} else {
            						pageContent = pageContent + '<li><a href="#" onclick="changePageno('+i+')">'+i+'</a></li>';
            					}
            				}
            				if ( pageObj.pageno != pageObj.totalno ) {
            					pageContent = pageContent + '<li><a href="#" onclick="changePageno('+(pageObj.pageno+1)+')">下一页</a></li>';
            				}
            				
            				$(".pagination").html(pageContent);
            				
            				$("tbody").html(content);
            			} else {
            				layer.msg("角色分页查询数据失败", {time:1000, icon:5, shift:6});
            			}
            		}
            	});
            }
            var cond = false;
            function queryUser() {
            	var queryText = $("#queryText");
            	if ( queryText.val() == "" ) {
            		layer.msg("查询条件不能为空，请输入", {time:1000, icon:5, shift:6}, function(){
            			queryText.focus();
            		});
            		return;
            	}
            	cond = true;
            	pageQuery(1);
            }
            
            function deleteUser(id, name) {
    			layer.confirm("删除角色: "+name+", 是否继续？",  {icon: 3, title:'提示'}, function(cindex){
    				// 删除数据
    				$.ajax({
    					url : appPath+"/manager/role/delete",
    					type : "POST",
    					data  : {
    						id : id
    					},
    					success : function(result) {
    						if ( result.success ) {
                				layer.msg("角色信息删除成功", {time:1000, icon:6}, function(){
                					pageQuery(1);
                				});
    						} else {
    							layer.msg("角色信息删除失败", {time:1000, icon:5, shift:6});
    						}
    					}
    				});
    				
    				
    			    layer.close(cindex);
    			}, function(cindex){
    			    layer.close(cindex);
    			});
            }
            
            function allSel( obj ) {
            	// 获取全选框的勾选状态
            	var flg = obj.checked;
            	
            	var roleBox = $("tbody :checkbox");
            	
            	$.each(roleBox, function(i, n){
            		n.checked = flg;
            	});
            }
            
            function deleteUsers() {
            	var checkBox = $("tbody :checked");
            	if ( checkBox.length == 0 ) {
            		layer.msg("请选择需要删除的角色数据", {time:1000, icon:5, shift:6});
            	} else {
        			layer.confirm("删除选择的角色数据, 是否继续？",  {icon: 3, title:'提示'}, function(cindex){
        				// 删除数据
        				var obj = {}
        				$.each(checkBox, function(i, n){
        					obj["ids["+i+"]"] = n.value;
        				});
        				$.ajax({
        					url : appPath+"/manager/role/deletes",
        					type : "POST",
        					data  : obj,
        					success : function(result) {
        						if ( result.success ) {
                    				layer.msg("角色信息删除成功", {time:1000, icon:6}, function(){
                    					pageQuery(1);
                    				});
        						} else {
        							layer.msg("角色信息删除失败", {time:1000, icon:5, shift:6});
        						}
        					}
        				});
        			    layer.close(cindex);
        			}, function(cindex){
        			    layer.close(cindex);
        			});
            	}
  }