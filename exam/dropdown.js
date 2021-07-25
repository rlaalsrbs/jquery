$(function() {
	/** 메뉴 열고 닫기 */
	$(".menu_open").click(function() {
		const nav = $("nav"); 
		const menuOpen = $(".menu_open");
		// hasClass - classList.contains
		if (nav.hasClass("on")) { // 메뉴가 열려 있는 상태
			// 메뉴 닫기
			nav.removeClass("on");
			
			// 문구 변경 - 메뉴열기
			menuOpen.text("메뉴열기");
		} else { // 메뉴가 닫혀 있는 상태 
			// 메뉴 열기 
			nav.addClass("on");
			
			// 문구 변경 - 메뉴닫기
			menuOpen.text("메뉴닫기");
		}
	});
});