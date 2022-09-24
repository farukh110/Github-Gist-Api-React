import { Image, Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

const ForksContent = (props) => {

    const { forksData } = props;

    const forks = forksData.forks.forks || [];
    console.log(forks);

    return (
        <div>
            <p>Forks:</p>
            {forks && forks.length !== 0 ? forks.map((fork, index) => (
                <ul>
                    <li key={index}>
                        <a
                            href={`https://gist.github.com/${fork.id}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Avatar
                                src={<Image src={fork.user.avatar_url} />}
                                style={{ margin: 5 }}
                            />
                            {fork.user.login}
                        </a>
                    </li>
                </ul>
            )) : <Tag color="magenta">No forks yet.</Tag>}
        </div>
    )
}

export default ForksContent;