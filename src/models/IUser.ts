export default interface IUser {
    username?: string,
    password?: string,
    email?: string,
    roles?: [{ type: String, ref: 'Role' }],
    image: string,
    _id?: any
}