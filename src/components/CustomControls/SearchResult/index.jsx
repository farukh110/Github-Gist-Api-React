import React from 'react';
import { usernameSpacing } from '../../../utilities/utitlies';
import Content from '../Content';

const SearchResult = (data, username) => {

    const userdata = data.data;

    return (
        <div className='container'>

            {
                username !== null && userdata.length !== 0 ? (
                    <div>
                        <div className="alert alert-primary" role="alert">

                            username: {usernameSpacing(data.username)}

                            <br />
                            {userdata.length} gists found
                        </div>

                        <div className='table-responsive'>

                            <table className="table table-bordered mb-5">
                                <thead>
                                    <tr>
                                        <th scope="col"> Discription </th>
                                        <th scope="col"> No of Files </th>
                                        <th scope="col"> Languages </th>
                                        <th scope="col"> File Types </th>
                                        <th scope="col"> Action </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {userdata.map((item) => {
                                        return <Content key={item.id} gistData={item} />;
                                    })}

                                </tbody>
                            </table>

                        </div>

                    </div>

                ) : null
            }


        </div>
    )
}

export default SearchResult;