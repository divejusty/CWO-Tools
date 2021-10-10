/**
 * Toggles the theme between dark and light.
 */
export function toggleThemeMode()
{
	if(localStorage.theme === null || localStorage.theme === 'dark') {
		localStorage.theme = 'light'
		document.documentElement.classList.remove('dark')
	} else {
		localStorage.theme = 'dark'
		document.documentElement.classList.add('dark')
	}
}
