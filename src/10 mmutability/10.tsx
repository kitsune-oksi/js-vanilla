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
    books: Array<string>

}

export type WithCompaniesType = {
    companies: Array<{
        id: number
        title: string
    }>
}


export function upgradeUserLaptop(user: UserType, laptop: string): UserType {
    return {
        ...user,
        laptop: {
            ...user.laptop,
            title: laptop
        }
    }
}

export function upgradeUserBooks(user: UserType, book: Array<string>): UserType {
    return {
        ...user,
        books: [...user.books, ...book]
    }
}

export function replaceUserBooks(user: UserType, oldBook: string, newBook: string): UserType {
    return {
        ...user,
        books: user.books.map(el => el === oldBook ? oldBook = newBook : el)
    }
}

export function removeUserBooks(user: UserType, bookForRemove: string): UserType {
    return {
        ...user,
        books: user.books.filter(el => el !== bookForRemove)
    }
}

export function updateUserCompanie(user: WithCompaniesType, companyId: number, newCompany: string) {
    return {
        ...user,
        companies: user.companies.map(el => companyId === el.id ? {...el, title: newCompany} : el)
    }
}

