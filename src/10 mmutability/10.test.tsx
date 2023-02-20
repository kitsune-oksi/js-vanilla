import {upgradeUserLaptop, UserType} from "./10";

test('upgrate user`s laptop', () => {
    const user: UserType  = {
        name: 'Ingvarr',
        address: {
            city: 'Dushanbe',
            house: 23
        },
        laptop: {
            title: 'Macbook pro 2018'
        }
    }

    const upgradeUser = upgradeUserLaptop(user, 'Macbook pro 2023')

    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.laptop).not.toBe(upgradeUser.laptop)
    expect(upgradeUser.laptop.title).toBe('Macbook pro 2023')
    expect(user.laptop.title).toBe('Macbook pro 2018')
})