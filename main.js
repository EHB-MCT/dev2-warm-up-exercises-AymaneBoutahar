import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();
warmup2();
function warmup1() {
	console.log("Exercise week 1");
	const button = document.querySelector("#button-1a");

	button.addEventListener("click", function () {
		console.log("Click works");

		document.querySelector("#content-1").innerHTML =
			"<p>Hallo, dit is de oefening van je mama</p>";
	});
}

function warmup2() {
	console.log("Exercise week 2");
	const scores = getRandomScores(10);
	const score = document.querySelector("#button-2a");

	score.addEventListener("click", function () {
		console.log("Score appears");

		let html = "<ul>";

		scores.forEach(function (score) {
			console.log(scores);
			console.log(score);

			html += `<li>${score}</li>`;
		});
		html += "</ul>";

		document.querySelector("#content-2").innerHTML = html;
	});

	const organize = document.querySelector("#button-2b");

	organize.addEventListener("click", function () {
		console.log("Score has been organized");

		let html = "<ul>";

		scores.sort(function (a, b) {
			if (a > b) {
				return 1;
			} else {
				return -1;
			}
		});

		html += "</ul>";

		document.querySelector("#content-2").innerHTML = html;
	});
}

function warmup3() {
	let student = getStudentJSON();
}

function warmup4() {
	let main, min, max;
}

function warmup5() {}
