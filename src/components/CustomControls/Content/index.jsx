import React, { useState } from 'react';
import { GetGistUrl } from '../../../services/gist';
import Tag from 'antd/lib/tag';
import FileTypeContent from './components/FileTypeContent';
import ForksContent from './components/ForksContent';

const Content = (props) => {

    const { gistData } = props;

    console.log("gistData, ", gistData);

    const dataItems = gistData;
    const files = dataItems.files;

    const fileItems = [];

    for (let file in files) {

        let language = files[file].language;

        if (fileItems.indexOf(language) === -1) {

            fileItems.push(language);
        }
    }

    const no_of_files = Object.keys(files).length;

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    console.log("data ...., ", data);


    const moreOptions = async (value) => {

        if (value !== "") {

            try {

                const url = GetGistUrl(value);
                const result = await fetch(url);
                const data = await result.json();

                setData(data);
                setShow(true);

            } catch (error) {

                console.log(error);
                setShow(false);
            }
        }
    }

    return (
        <tr>
            <td className='td-des'> {dataItems.description || "No Description"} </td>

            <td>
                <p className="numberFiles">
                    {no_of_files} {no_of_files > 1 ? "Files" : "File"}
                </p>
            </td>

            <td>
                {fileItems.map((item, index) => {
                    return (
                        <Tag color="geekblue" key={index}>
                            {item}
                        </Tag>
                    );
                })}
            </td>

            <td>
                <FileTypeContent filelist={files} gistData={dataItems} />
                {show && data !== [] ? <ForksContent forksData={data} /> : null}

            </td>

            <td>
                <button className='btn btn-primary' onClick={() => moreOptions(`/${dataItems.id}`)}>
                    More
                </button>
            </td>
        </tr>
    )
}

export default Content;