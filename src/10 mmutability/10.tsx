type AdressType = {
    city: string
    house: number
}

type LaptopType = {
    title: string
}

export type UserType = {
    name: string
    address: AdressType
    laptop: LaptopType

}

export function upgradeUserLaptop(user: UserType, laptop: string) {
    return {
        ...user,
        laptop: {
            ...user.laptop,
            title: laptop
        }
    }
}