
type DataType = {
    login: number
    password: number
}
type LockType = {
    material: string
    isLocked: boolean
    code: Array<DataType>
}
type DoorType = {
    material: string
    high: number
    width: number
    isOpen: boolean
    lock: LockType
}
const door: DoorType = {
    material: 'wood',
    high: 50,
    width: 200,
    isOpen: false,
    lock: {
        material: 'metall',
        isLocked: true,
        code: [{login: 123, password: 123}, {login: 456, password: 456}]
    }
}