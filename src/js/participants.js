import { Notify } from './events'
import { shell } from './shell'

export function AddParticipant(name, level)
{
	let isNew = true
	let participants = JSON.parse(shell.fetchItem('participants'))

	participants.forEach((p) => {
		if(p.name.toLowerCase() == name.toLowerCase()) {
			alert('Deze naam bestaat al!')
			isNew = false
			return
		}
	})
	if(!isNew) {
		return
	}

	participants.push({
		"name": name,
		"level": level
	})
	shell.storeItem('participants', JSON.stringify(participants))

	// Visually update the list
	UpdateList(participants)
	Notify('dataupdated')
}

function UpdateList(participants)
{
	let list = shell.find('ul.participant-list')
	participants.forEach((elem, index) => {
		if(list.childElementCount < index + 1) { // Only add participants that are actually new
			list.appendChild(GenerateParticipant(elem))
		}
	})
}

function GenerateParticipant(participant)
{
	let p = document.createElement('li')
	p.setAttribute('class', 'participants')
	p.innerHTML = participant.name + ' - ' + participant.level
	let b = document.createElement('button')
	b.setAttribute('class', 'delete button')
	b.setAttribute('participant', JSON.stringify(participant))
	b.innerText = 'x'
	p.appendChild(b)
	shell.addEvent('click', b, DeleteParticipant)
	return p
}

export function DeleteParticipant(event)
{
	let participants = JSON.parse(shell.fetchItem('participants'))
	let participant = JSON.parse(event.srcElement.getAttribute('participant'))
	
	participants = participants.filter((p) => {	
		return !(p.name.valueOf() == participant.name.valueOf() && p.level == participant.level)
	})

	shell.storeItem('participants', JSON.stringify(participants))

	// Visually update the list
	event.srcElement.parentNode.remove()
	Notify('dataupdated')
}
