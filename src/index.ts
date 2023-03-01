import { getName } from './getName'
import { getNameCombination } from './getNameCombination'

export const nameCheck = <P, S>({
  player,
  squadList,
  playerNameField,
  playerShirtnumberField,
  squadNameField,
  squadShirtnumberField,
  squadListFieldReturn,
}: {
  player: P
  squadList: S[]
  playerNameField: string
  squadListFieldReturn: string
  squadNameField: string
  playerShirtnumberField: string
  squadShirtnumberField: string
}) => {
  if (squadList) {
    let price = '0'
    //@ts-ignore
    const playerName = getName(player[playerNameField])
    squadList.forEach((item) => {
      //@ts-ignore
      const itemName = getName(item[squadNameField])
      if (playerName === itemName) {
        //@ts-ignore
        price = item[squadListFieldReturn]
      }
    })
    if (price == '0') {
      //@ts-ignore
      const playerName = getNameCombination(player[playerNameField])
      squadList.forEach((item) => {
        //@ts-ignore
        const itemName = getNameCombination(item[squadNameField])
        if (playerName[0] === itemName[0] && playerName[1] === itemName[1]) {
          //@ts-ignore
          price = item[squadListFieldReturn]
        }
        if (playerName[1] === itemName[0] && playerName[0] === itemName[1]) {
          //@ts-ignore
          price = item[squadListFieldReturn]
        }
        if (
          playerName[0].slice(0, 1) === itemName[0].slice(0, 1) &&
          playerName[1] === itemName[1]
        ) {
          //@ts-ignore
          price = item[squadListFieldReturn]
        }
        if (
          playerName[1].slice(0, 1) === itemName[0].slice(0, 1) &&
          playerName[0] === itemName[1]
        ) {
          //@ts-ignore
          price = item[squadListFieldReturn]
        }
      })
    }
    // if (price == '0') {
    //   squadList.forEach((item) => {
    //     if (
    //       //@ts-ignore
    //       parseInt(player[playerShirtnumberField]) ==
    //       //@ts-ignore
    //       parseInt(item[squadShirtnumberField])
    //     ) {
    //       //@ts-ignore
    //       price = item[squadListFieldReturn]
    //     }
    //   })
    // }
    return price
  }
}

export default nameCheck
