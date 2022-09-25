import React, { useState } from "react";
import { Input } from "antd";
import { GetAllGistUrl } from "../../../services/gist";
import SearchResult from "../SearchResult";
import Loading from "../Loading";

const { Search } = Input;

const CustomSearchBar = () => {
    /**  ------------- start states --------------------- */
    const [username, setUsername] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    /**  ------------- end states --------------------- */

    /**  ------------- start searching behavior --------------------- */

    const onSearchHandler = async (username) => {

        const user_name = username.trim();
        setUsername(user_name);
        setLoading(true);

        if (user_name && user_name !== "") {

            try {

                const url = GetAllGistUrl(user_name);
                const result = await fetch(url);

                const data = await result.json();

                setData(data);
                setLoading(false);
                setError(false);

            } catch (error) {

                setLoading(false);
                setError(false);
            }

        } else if (user_name === "") {

            setLoading(false);
            setError(true);
        }

        setLoading(false);
    };

    /**  ------------- end searching behavior --------------------- */
    return (
        <div className='conainer pl-0 pr-0'>

            <div className='row justify-content-center'>

                <div className='col-md-10'>

                    <Search
                        placeholder="Search username..."
                        allowClear
                        className='search-bar'
                        enterButton="Search"
                        size="large"
                        onSearch={onSearchHandler}
                    />

                </div>

            </div>

            <div className='row mt-md-5 justify-content-center'>

                <div className='col-md-10'>

                    {
                        loading ? (<Loading />) : null
                    }

                    {
                        username !== "" && data && !error ? (<SearchResult data={data} username={username} />) : null
                    }

                    {
                        username && data.length === 0 ? (
                            <div className="alert alert-primary" role="alert">
                                No result found for this User
                            </div>
                        ) : null
                    }

                    {
                        username === '' ? (
                            <div className="alert alert-primary" role="alert">
                                Please Enter Valid user uame
                            </div>
                        ) : null
                    }

                </div>

            </div>

        </div>
    );
};

export default CustomSearchBar;