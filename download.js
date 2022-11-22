function checkcode(code) {
	if( code.length !== 8 ) { return -1; }

	checkdigit = (((code.substr(0,1) - 0) + (code.substr(2,1) - 0) + (code.substr(4,1) - 0) + (code.substr(6,1) - 0))
			   + (((code.substr(1,1) - 0) + (code.substr(3,1) - 0) + (code.substr(5,1) - 0)) * 3)) % 10;
	if( checkdigit === ((code.substr(7,1)) - 0) ) {
		return 0;
	}
	return 1;
}

var baseurl = './files/';
document.getElementById('form_submit').addEventListener('click', function(){
	var code = document.getElementById('code').value;

	// code check
	var check = checkcode(code);
	if( check !== 0 ) {
		console.log('入力されたコードに誤りがあります。コードを確認してください。')

		var elm_err = document.getElementById('error');
		elm_err.innerHTML = '入力されたコードに誤りがあります。コードを確認してください。';
		elm_err.classList.add('visible');

		document.getElementById('download_link').innerHTML = '';

	} else {
		// generate url
		var link = baseurl + code + '.sb3';
		document.getElementById('download_link').innerHTML = '<a href="' + link + '">ダウンロード</a>';

		document.getElementById('form').classList.remove('visible');
		document.getElementById('error').classList.remove('visible');
		document.getElementById('download').classList.add('visible');
	}
});
