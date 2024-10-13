function updatetime() {
	 const time = document.querySelector(`#timer`)
	const now = new Date()
	const str = now.toLocaleString(`en-IN`,{
		month: `2-digit`,
		day: `2-digit`,
		year: `numeric`,
		hour: `2-digit`,
		minute: `2-digit`,
		second: `2-digit`,
		hour12:true
	})
	time.textContent = str;
}
setInterval(updatetime,1000);
	 updatetime();