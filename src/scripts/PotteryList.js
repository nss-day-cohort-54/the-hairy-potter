import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {

	const potteryList = usePottery()

	let htmlString = ""

	for(const pottery of potteryList) {
		htmlString += `
		<section class="pottery" id="pottery--${pottery.id}">
			<h2 class="pottery__shape">${pottery.shape}</h2>
			<div class="pottery__properties">
				Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
			</div>
			<div class="pottery__price">
				Price is $${pottery.price}
			</div>
		</section>
		`
	}
	return htmlString
}