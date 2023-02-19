import HeartIcon from '../images/Icons/heart-icon.png';
import RocketIcon from '../images/Icons/rocket-icon.png';

export const Post = ({index, user}) => {

    return (
        <div className="post" id={`postId${index+1}`} style={{border:'1px solid gray',borderRadius:'0.5rem',width:'290px',height:'480px',display:'flex',justifyContent:'center',flexDirection:'column',padding:'10px'}}>

            <header className="header">

                <div className="user-info">
                    <h3 className="username">{user.name}</h3>
                    <p className="location">{user.location}</p>
                </div>

            </header>

            <div className="image-container" style={{width:'290px',height:'300px'}}>
                <img style={{height:'100%',width:'100%'}} src={`data:image/png;base64,${ btoa(String.fromCharCode(...new Uint8Array(user .image.data.data)))}`} alt=""/>
            </div>

            <footer className="footer">

                <div className="post-spec">

                    <div className="post-options">

                        <div className="icons" style={{display:'flex',gap:'10px',paddingTop:'10px'}}>
                            <div className="heart-icon">
                                <img src={HeartIcon} alt="Like post" className="like-icon"/>
                            </div>
                            <div className="rocket-icon">
                                <img src={RocketIcon} alt="Share post" className="share-icon"/>
                            </div>
                        </div>

                        <p className="date">
                            {user.date}
                        </p>

                    </div>

                    <p className="post-likes">
                        {`${user.likes} likes`}
                    </p>

                </div>

                <h5 className="image-description">
                    {user.description}
                </h5>

            </footer>

        </div>
    )
}