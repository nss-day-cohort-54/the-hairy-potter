let potteryPK = 1

export const makePottery = (shape, weight, height) => {

    let newPotteryObj = {
        id: potteryPK,
        shape: shape,
        weight: weight,
        height: height
    }

    potteryPK++
    return newPotteryObj
}