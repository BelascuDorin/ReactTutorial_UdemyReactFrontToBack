import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) =>  {
    const githubContext = useContext(GithubContext);

    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //For the warnings, we don`t want to add dependencies as they would get us in infinite loop

        // eslint-disable-next-line  
    }, []); // [] -> enumerate the properties it should run for when they change


    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog, 
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gist,
        hireable
    } = user;

    if(loading) return <Spinner />
    return (
        <Fragment>
            <Link to='/' className='btn btn-light'> 
                Back To Search
            </Link>

            Hireable: { ' ' }
            {hireable ? 
                <i className="fas fa-check text-success"/>  : 
                <i className="fas fa-times-circle"/> 
            }

            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" alt = '' style={{width: '150px'}} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div> 
                <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className="btn btn-dark my-1"> Visit github profile </a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username: </strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company: </strong> {company}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Blog: </strong> {blog}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
        <div className="card text-center">
            <div className="badge badge-primary"> Followers: {followers} </div>
            <div className="badge badge-success"> Following: {following} </div>
            <div className="badge badge-danger"> Public Repos: {public_repos} </div>
            <div className="badge badge-dark"> Public gist: {public_gist} </div>
        </div>

        <Repos repos={repos} />
        </Fragment>
    )
    
}

export default User
