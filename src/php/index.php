<?php
// Include the utilities
include_once('Utils.php');
?>

<html lang="nl">
	<head>
		<title>CWO checklist generator</title>
		<link href="<?php echo Utils::mix('assets/vendor.css') ?>" rel="stylesheet">
		<link href="<?php echo Utils::mix('assets/app.css') ?>" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script>
			// On page load or when changing themes, best to add inline in `head` to avoid FOUC
			if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
				document.documentElement.classList.add('dark')
				localStorage.theme = 'dark'
			} else {
				document.documentElement.classList.remove('dark')
				localStorage.theme = 'light'
			}
</script>
	</head>

	<body>
		<div id="app"></div>
		<script src="<?php echo Utils::mix('assets/manifest.js') ?>"></script>
		<script src="<?php echo Utils::mix('assets/vendor.js') ?>"></script>
		<script src="<?php echo Utils::mix('assets/app.js') ?>"></script>
	</body>
</html>
