import React, { Component } from 'react';
import Consumer from '../context';
import Job from './Job';

class Jobs extends Component {
    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { jobs } = value;
                        return (
                            jobs.map(job => {
                                return (
                                    <Job
                                        key={job.id}
                                        id={job.id}
                                        name={job.name}
                                        experience={job.experience}
                                        type={job.type}
                                        salary={job.salary}
                                        location={job.location}
                                        image={job.image}
                                    />
                                )
                            })
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default Jobs;
