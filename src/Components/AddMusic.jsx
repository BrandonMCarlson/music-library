import AddMusiccss from 'AddMusic.css';

const Addmusic = (props) => {
    return(
        <div className="musicadder">
            <form action="" method="post">
                <label for="title">Title: </label>
                <input type="text" name="title"/>
                <label for="album">Album: </label>
                <input type="text" name="album"/>
                <label for="artist">Artist </label>
                <input type="text" name="artist"/>
                <label for="genre">Genre </label>
                <input type="text" name="genre">
                <label for="releaseDate">Release Date: </label>
                <input type="text" name="releaseDate">
            </form>
        </div>
        
    )
}

export default AddMusic;