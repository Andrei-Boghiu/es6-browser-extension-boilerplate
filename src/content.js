import { simulateClick } from './utils/simulateClick.js'

document.getElementById('simulateClickButton').addEventListener('click', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: simulateClick,
			args: ['#exampleButton'],
		})
	})
})
