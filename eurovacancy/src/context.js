import React, { Component } from 'react'

export const newcontext = React.createContext();


export class ContextProvider extends Component {
    state = {
        jobs: [
            {
                id: 1,
                name: "Front-end Developer",
                location: "1st street",
                type: "contract",
                salary: "1200",
                experience: "1 - 3",
                image: "..\\images\\job_post_img1.jpg"
            },
            {
                id: 2,
                name: "Back-end Developer",
                location: "2nd street",
                type: "type",
                salary: "2000",
                experience: "3 - 5",
                image: "..\\images\\job_post_img2.jpg"
            },
            {
                id: 3,
                name: "UI/UX Designer",
                location: "3rd street",
                salary: "1000",
                type: "Remote",
                experience: "1 - 3",
                image: "..\\images\\job_post_img3.jpg"
            },
            {
                id: 4,
                name: "Java Developer",
                location: "4th street",
                salary: "2000",
                type: "Full time",
                experience: "at least 5",
                image: "..\\images\\job_post_img2.jpg"
            },
            {
                id: 5,
                name: "Office Manager",
                location: "5th street",
                salary: "2000",
                type: "Part time",
                experience: "2 - 3",
                image: "..\\images\\job_post_img4.jpg"
            },
            {
                id: 6,
                name: "Web Developer(Internship)",
                location: "6th street",
                salary: "200",
                type: "Full time",
                experience: "Less than 1",
                image: "..\\images\\job_post_img4.jpg"
            },
            {
                id: 7,
                name: "Salesman",
                location: "7th street",
                salary: "600",
                type: "Full time",
                experience: "Less than 1",
                image: "..\\images\\job_post_img5.jpg"
            },
            {
                id: 8,
                name: "Electrical Engineering",
                location: "8th street",
                salary: "800",
                type: "Contract",
                experience: "2-3",
                image: "..\\images\\job_post_img2.jpg"
            }
        ],
        types: [
            {
                id: 1,
                name: "Full Time"
            },
            {
                id: 2,
                name: "Part Time"
            },
            {
                id: 3,
                name: "Freelance"
            },
            {
                id: 4,
                name: "Remotely"
            },
            {
                id: 5,
                name: "Contract"
            }
        ],
        locations: [
            {
                id: 1,
                name: "Baku"
            },
            {
                id: 1,
                name: "Ganca"
            },
            {
                id: 1,
                name: "Sumgayit"
            }
        ],
        categories: [
            {
                id: 1,
                name: "Web Development"
            },
            {
                id: 2,
                name: "Mobile Development"
            },
            {
                id: 3,
                name: "Web Designer"
            },
            {
                id: 4,
                name: "Management"
            }
        ]
    }
    render() {
        return (
            <newcontext.Provider value={this.state}>
                {this.props.children}
            </newcontext.Provider>
        )
    }
}
const consumer = newcontext.Consumer;
export default consumer;