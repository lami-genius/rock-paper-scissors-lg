import { IScore } from "./iscore";

export interface IUser {
    id: number
    name: string
    score: IScore[]
}
