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
			// On page load or when changing themes, added inline in `head` to avoid FOUC
			if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
				document.documentElement.classList.add('dark')
				localStorage.theme = 'dark'
			} else {
				document.documentElement.classList.remove('dark')
				localStorage.theme = 'light'
			}

			// Bind the version data to the window instance
			window.appVersionDate = <?php echo Utils::updatedAt(); ?>
		</script>
	</head>

	<body class="text-md dark:text-gray-100 text-gray-900 dark:bg-gray-900 bg-gray-200 print:bg-transparent print:dark:bg-transparent">
		<div id="app"></div>
		<script src="<?php echo Utils::mix('assets/manifest.js') ?>"></script>
		<script src="<?php echo Utils::mix('assets/vendor.js') ?>"></script>
		<script src="<?php echo Utils::mix('assets/app.js') ?>"></script>
	</body>
</html>
