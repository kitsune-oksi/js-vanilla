import {
    removeUserBooks,
    replaceUserBooks,
    updateUserCompanie,
    upgradeUserBooks,
    upgradeUserLaptop,
    UserType,
    WithCompaniesType
} from "./10";

test('upgrate user`s laptop', () => {
    const user: UserType = {
        name: 'Ingvarr',
        address: {
            city: 'Dushanbe',
            house: 23
        },
        laptop: {
            title: 'Macbook pro 2018'
        },
        books: ['html & css', 'js', 'react']
    }

    const upgradeUser = upgradeUserLaptop(user, 'Macbook pro 2023')

    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.laptop).not.toBe(upgradeUser.laptop)
    expect(upgradeUser.laptop.title).toBe('Macbook pro 2023')
    expect(user.laptop.title).toBe('Macbook pro 2018')
})

test('upgrate user`s books', () => {
    const user: UserType = {
        name: 'Ingvarr',
        address: {
            city: 'Dushanbe',
            house: 23
        },
        laptop: {
            title: 'Macbook pro 2018'
        },
        books: ['html & css', 'js', 'react']
    }

    const upgradeUser = upgradeUserBooks(user, ['ts', 'redux'])

    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(upgradeUser.books).not.toBe(user.books)
    expect(upgradeUser.books[3]).toBe('ts')
    expect(upgradeUser.books[4]).toBe('redux')
})

test('replace user`s books', () => {
    const user: UserType = {
        name: 'Ingvarr',
        address: {
            city: 'Dushanbe',
            house: 23
        },
        laptop: {
            title: 'Macbook pro 2018'
        },
        books: ['html & css', 'js', 'react']
    }

    const upgradeUser = replaceUserBooks(user, 'js', 'ts')

    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(upgradeUser.books).not.toBe(user.books)
    expect(upgradeUser.books[1]).toBe('ts')
})

test('remove user`s books', () => {
    const user: UserType = {
        name: 'Ingvarr',
        address: {
            city: 'Dushanbe',
            house: 23
        },
        laptop: {
            title: 'Macbook pro 2018'
        },
        books: ['html & css', 'js', 'react']
    }

    const upgradeUser = removeUserBooks(user, 'js')

    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(upgradeUser.books).not.toBe(user.books)
    expect(upgradeUser.books[1]).toBe('react')
})

test('update user`s company', () => {
    const user: UserType & WithCompaniesType = {
        name: 'Ingvarr',
        address: {
            city: 'Dushanbe',
            house: 23
        },
        laptop: {
            title: 'Macbook pro 2018'
        },
        books: ['html & css', 'js', 'react'],
        companies: [{id: 1, title: 'justice-it'}, {id: 2, title: 'google'}]
    }

    const upgradeUser = updateUserCompanie(user, 1, 'fortech') as UserType & WithCompaniesType

    expect(user).not.toBe(upgradeUser)
    expect(user.address).toBe(upgradeUser.address)
    expect(user.laptop).toBe(upgradeUser.laptop)
    expect(upgradeUser.books).toBe(user.books)
    expect(upgradeUser.companies[0].title).toBe('fortech')
})