/**
* 상품 양식 추가,삭제
*
*/
const goodsForm = {
	num : 1,
	/**
	* 상품 추가 
	*
	*/
	add : function() {
		// this -> 현재 객체를 가리키는 주소를 가지고 있는 값 == goodsForm
		let html = $("#goods_form").html();
		
		html = html.replace(/<%=no%>/g, this.num);
		

		$("#frm").append(html);
		
		// 옵션 1개 추가
		const add_opt = $("#frm .goods").last().find(".add_opt");
		this.addOpt(add_opt);
		
		this.num++; // 상품 추가하면 num는 1씩 증가 
	},
	/**
	* 옵션 추가 
	*
	*/
	addOpt : function(el) {
		const html = $("#goods_opt_form").html();
		el.closest(".opts").find("tbody").append(html);
	},
	/**
	* 상품 삭제
	*
	*/
	delete : function(el) {
		el.closest(".goods").remove();
	},
	/**
	* 옵션 삭제 
	*
	*/
	deleteOpt : function(el) {
		el.closest("tr").remove();
	}
};


$(function() {
	// DOM 트리 구축 완료
	goodsForm.add();
	
	/** 상품 추가 */
	$("#add").click(function() {
		goodsForm.add();
	});
	
	/** 상품 삭제 */
	// 동적으로 추가한 요소는 이벤트 핸들러가 동작 X 
	// on 라이브 메서드 
	/*
	$(".del").click(function() {
		goodsForm.delete($(this));
	});
	*/
	$("body").on("click", ".del", function() {
		goodsForm.delete($(this));
	});
	
	/** 옵션 추가 */
	/*
	$(".add_opt").click(function() {
		alert("추가!");
	});
	*/
	$("body").on("click", ".add_opt", function() {
		goodsForm.addOpt($(this));
	});
	
	
	/** 옵션 삭제 */
	/*
	$(".del_opt").click(function() {
		alert("삭제!")
	});
	*/
	$("body").on("click", ".del_opt", function() {
		goodsForm.deleteOpt($(this));
	});
});