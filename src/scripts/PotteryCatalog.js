let sellablePottery = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.weight >= 6) {
        potteryObj.price = 40
    } else if (potteryObj.weight < 6) {
        potteryObj.price = 20
    }

    if (potteryObj.cracked === false) {
        sellablePottery.push(potteryObj)
    }
}

export const usePottery = () => {
    return sellablePottery.map(pottery => ({ ...pottery }))
}