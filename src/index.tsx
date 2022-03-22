import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {v1} from "uuid";


export type AppTypeProps = {
    messages: Array<MessageTypeProps>
    users: Array<UsersTypeProps>
    posts: Array<TypePropsMyPost>
}

export type MessageTypeProps = {
    id: string,
    message: string,
}
export  type UsersTypeProps = {
    id: string,
    name: string,
}
export type TypePropsMyPost = {
    id: string,
    message: string,
    likes: number
}


const messages: Array<MessageTypeProps> = [
    {id: v1(), message: "Hello, i am Satoshi"},
    {id: v1(), message: "Hello, i am Djun"},
    {id: v1(), message: "Hello, i am Acira"},
    {id: v1(), message: "Hello, i am Kero"},
    {id: v1(), message: "Hello, i am Ymy"},
]
const users: Array<UsersTypeProps> = [
    {id: v1(), name: "Satoshi"},
    {id: v1(), name: "Djun"},
    {id: v1(), name: "Acira"},
    {id: v1(), name: "Kero"},
    {id: v1(), name: "Ymy"},
]
const posts: Array<TypePropsMyPost> = [
    {id: v1(), message: "I am samurai", likes: 5},
    {id: v1(), message: "I am ninja", likes: 10},
    {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
    {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
]

// const rootData:AppTypeProps = {
//     messages: [
//         {id: v1(), message: "Hello, i am Satoshi"},
//         {id: v1(), message: "Hello, i am Djun"},
//         {id: v1(), message: "Hello, i am Acira"},
//         {id: v1(), message: "Hello, i am Kero"},
//         {id: v1(), message: "Hello, i am Ymy"},
//     ],
//     users: [
//         {id: v1(), name: "Satoshi"},
//         {id: v1(), name: "Djun"},
//         {id: v1(), name: "Acira"},
//         {id: v1(), name: "Kero"},
//         {id: v1(), name: "Ymy"},
//     ],
//     posts: [
//         {id: v1(), message: "I am samurai", likes: 5},
//         {id: v1(), message: "I am ninja", likes: 10},
//         {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
//         {id: v1(), message: "I am Satoshi Nakamoto", likes: 15},
//     ],
//
// }
ReactDOM.render(
    <App users={users} messages={messages} posts={posts}/>,
    document.getElementById("root")
);
