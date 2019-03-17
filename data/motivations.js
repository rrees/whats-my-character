const searching = [
	"their family",
	"a lost city",
	"an ancient treasure",
	"a prophesied king",
	"a missing sibling",
	"a family heirloom",
	"the truth about their parentage",
].map((goal) => `searching for ${goal}`);

const running = [
	"an arranged marriage",
	"a vengeful cult",
	"the wrath of a dead god",
	"a dark fate",
	"the law",
].map((source) => `on the run from ${source}`);

const looking = [
	"revenge",
	"love",
	"the one",
	"trouble",
].map((goal) => `looking for ${goal}`);

const ending = [
	"slavery",
	"the influence of demons",
	"the patriarchy",
].map((goal) => `wanting to bring an end to ${goal}`);

const motivations = [
	"one day from retirement",
	"seeking to be a healer",
	"being persued by a vicious crime syndicate",
	...searching,
	...running,
	...looking,
	...ending,
];

module.exports = {
	motivations: motivations,
}