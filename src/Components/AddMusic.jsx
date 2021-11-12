// import AddMusiccss from 'AddMusic.css';

const AddMusic = (props) => {
    return(
        <div className="musicadder">
            <form action="" method="post">
                <label for="title">Title: </label>
                <input type="text" name="title"/><br/>
                <label for="album">Album: </label>
                <input type="text" name="album"/><br/>
                <label for="artist">Artist </label>
                <input type="text" name="artist"/><br/>
                <label for="genre">Genre </label>
                <input type="text" name="genre"/><br/>
                <label for="releaseDate">Release Date: </label>
                <input type="text" name="releaseDate"/> <button type="button" class="btn btn-outline-primary">Submit</button>
            </form>
        </div>
        
    )
}

export default AddMusic;