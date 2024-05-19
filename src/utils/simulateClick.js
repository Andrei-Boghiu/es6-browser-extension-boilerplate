export function simulateClick(selector) {
	const element = document.querySelector(selector)
	if (!element) {
		console.error(`No element found with selector: ${selector}`)
		return
	}
	const event = new MouseEvent('click', {
		view: window,
		bubbles: true,
		cancelable: true,
	})
	element.dispatchEvent(event)
}
