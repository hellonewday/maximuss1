function XinChao(){
			
	alert('Xin chào và hẹn gặp lại ở chương trình lần sau');
		
}
			
function TamBiet(){
				
	alert('Tạm Biệt Nhé Huhu');
			}
		
var HoiEm = prompt('Em tên là gì ?');
			
if (HoiEm === 'Hà Thị Kim Phụng' || HoiEm === 'Phụng' || HoiEm === 'Phung' || HoiEm === 'Kim Phụng'){
				
	document.write('Xin chào  ' +'' + HoiEm + '</br>');
				
	document.write('<button onclick="XinChao()"> Chào tôi đi</button>');
			
}
			
else {
				
	document.write('<button onclick="TamBiet()"> Tạm Biệt </button>');
			
}