import { Tag } from "antd";

const FileTypeContent = (props) => {

    const { filelist, gistData } = props;

    console.log(" gistData file type content ", gistData);

    const files = filelist;

    console.log("files ", files);


    return (
        <>
            <p>Files:</p>
            <ul className='list-group'>
                {Object.values(files).map((file, index) => {
                    return (
                        <li className="list-group-item" key={index} >

                            <a href={file.raw_url} target="_blank" rel="noreferrer">

                                <Tag color="geekblue">
                                    {file.filename}
                                </Tag>

                            </a>

                        </li>
                    );
                })}
            </ul>

        </>
    );
};

export default FileTypeContent;