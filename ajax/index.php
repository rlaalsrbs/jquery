<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8'>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script>
		$(function() {
			$("#button").click(function() {
				$.ajax({
					url : "ajax.php",
					type : "get", 
					dataType : "html", //, text - 출력하고 보여주기 위한 용도
					data : { key1 : 'value1', key2 : 'value2' },
					success : function(res) {
						$("#html").html(res);
					},
					error : function(err) {
						console.error(err);
					}
				});
			});
			
			$("#button2").click(function() {
				$.ajax({
					url : "ajax2.php",
					type : "get",
					dataType : "json", // 정보, 데이터를 가져와서 2차 처리를 위한 것
					success : function (response) {
						console.log(response);
					},
					error : function (err) {
						console.error(err);
					}
				});
			});
		});
		</script>
	</head>
	<body>
		<button id="button">가져오기</button>
		<button id="button2">JSON 데이터 가져오기</button>
		<div id='html'></div>
	</body>
</html>