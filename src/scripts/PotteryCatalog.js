let sellablePottery = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked === false) {
        if (potteryObj.weight >= 6) {
            potteryObj.price = 40
        } else if (potteryObj.weight < 6) {
            potteryObj.price = 20
        }

        sellablePottery.push(potteryObj)
    }

    return potteryObj
}

export const usePottery = () => {
    return sellablePottery.map(pottery => ({ ...pottery }))
}