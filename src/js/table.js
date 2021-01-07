import { Shell } from './shell'

export function Generate()
{
	let participants = JSON.parse(Shell.fetchItem('participants'))
	let discipline = shell.fetchItem('discipline')

	RemoveOld()

	if(!CheckData()) {
		return
	}

	let requirements = JSON.parse(shell.fetchItem(discipline))
	if(requirements == null) {
		if(shell.logging) { console.error('Unknown requirements: ' + discipline) }
		return
	}

	
	let table = Table()
	Header(table, participants)
	Requirements(table, participants, requirements)
	shell.find('.checklist').appendChild(table)


}

export function CheckData()
{
	let participants = JSON.parse(Shell.fetchItem('participants'))
	let discipline = Shell.fetchItem('discipline')

	if(participants.length == 0 || discipline == 'null') {
		if(Shell.logging) { console.log('Not enough data yet') }
		return false
	}

	return true
}

function RemoveOld()
{
	let t = Shell.find('.table')
	if(t != null) {
		t.remove()
	}
}

function Header(table, participants)
{
	
	let r1 = document.createElement('tr')
	r1.setAttribute('class', 'table__label')
	let r2 = document.createElement('tr')
	r2.setAttribute('class', 'table__label')
	r1.innerHTML = '<td></td>'
	r2.innerHTML = '<td></td>'
	participants.forEach((p) => {
		r1.innerHTML += '<td>' + p.name + '</td>'
		r2.innerHTML += '<td>' + p.level + '</td>'
	})
	

	table.appendChild(r1)
	table.appendChild(r2)
}

function Table()
{
	let t = document.createElement('table')
	t.setAttribute('class', 'table')

	return t
}

function Requirements(table, participants, requirements)
{
	requirements.requirements.forEach((req) => {
		let r = document.createElement('tr')
		let print = false
		r.innerHTML = '<td class="table__label">' + req.name + '</td>'

		participants.forEach(part => {
			r.innerHTML += '<td class="table__cell--' + (part.level >= req.diploma ? 'req' : 'noreq') + '"></td>'
			print = print || part.level >= req.diploma
		})
		if(!print) {
			r.setAttribute('class', 'no-print')
		}

		table.appendChild(r)
	})
}
