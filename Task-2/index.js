document.addEventListener("DOMContentLoaded", () => {
	const modal = document.getElementById("modal")
	const openModalBtn = document.getElementById("openModalBtn")
	const closeModalSpan = document.getElementsByClassName("close")[0]
	const userForm = document.getElementById("userForm")

	openModalBtn.onclick = () => {
		modal.style.display = "block"
	}

	closeModalSpan.onclick = () => {
		modal.style.display = "none"
	}

	window.onclick = (event) => {
		if (event.target == modal) {
			modal.style.display = "none"
		}
	}

	window.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && modal.style.display === "block") {
			modal.style.display = "none"
		}
	})

	userForm.onsubmit = (event) => {
		event.preventDefault()

		const username = document.getElementById("username").value
		const email = document.getElementById("email").value
		const password = document.getElementById("password").value

		console.log({
			username: username,
			email: email,
			password: password
		})

		modal.style.display = "none"
		userForm.reset()
	}
})
