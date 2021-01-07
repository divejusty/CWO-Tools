import { AddParticipant } from './participants'
import { Generate, CheckData } from './table'
import { shell } from './shell'

// Discipline selector
let disc = shell.find("[name='discipline']")
disc.addEventListener('change', (e) => {
	window.localStorage.setItem('discipline', disc.value)
	let discipline = JSON.parse(window.localStorage.getItem(disc.value))
	shell.find(".checklist__title").textContent = 'Checklist ' + discipline.name
	Notify('dataupdated')
})

// Add new participant
let partbtn = shell.find("#add-new-participant")
partbtn.addEventListener('click', (e) => {
	let namefld = shell.find("[name='new-name']")
	let name = namefld.value
	let level = shell.find("[name='new-level']").value
	
	if(name.length == 0 || level < 1 || level > 4) {
		alert('onjuiste waardes ingevoerd!')
	} else {
		AddParticipant(name, level)
		document.querySelector("[name='new-name']").value = ''
	}

	namefld.focus()
})

shell.find('.do-print')
	.addEventListener('click', (e) => {
		if(CheckData()) {
			window.print()
		} else {
			alert('Er is nog niks om te printen')
		}
	})

shell.find('.do-reset')
	.addEventListener('click', e => {
		window.location.reload()
	})

document.addEventListener('dataupdated', (e) => {
	Generate()
})

document.addEventListener('keypress', (e) => {
	if(e.key != 'Enter') {
		return
	}
	e.preventDefault()

	partbtn.dispatchEvent(new Event('click'))
})

export function Notify(name)
{
	document.dispatchEvent(new Event(name))
}
