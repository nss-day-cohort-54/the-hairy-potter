// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 5)
let jar = makePottery("Jar", 4, 1)
let bowl = makePottery("Bowl", 5, 2)
let vase = makePottery("Vase", 15, 6)
let teapot = makePottery("Teapot", 3, 1)

// Fire each piece of pottery in the kiln
mug = firePottery(mug, 1500)
jar = firePottery(jar, 2300)
bowl = firePottery(bowl, 2200)
vase = firePottery(vase, 2100)
teapot = firePottery(teapot, 2500)


// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(jar)
toSellOrNotToSell(bowl)
toSellOrNotToSell(vase)
toSellOrNotToSell(teapot)

// Invoke the component function that renders the HTML list
const htmlTarget = document.querySelector(".potteryList")

const html = PotteryList()

htmlTarget.innerHTML = html