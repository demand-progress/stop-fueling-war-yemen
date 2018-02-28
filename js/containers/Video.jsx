import React from 'react'

// class Video extends Component {
//    return (
//        <div>
//     <iframe width="560" height="315" src="https://www.youtube.com/embed/WaQewDoipQQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
//     </div>
//    )
// }

const Video = () => {
    return (
        <div id="video">
            <h4 style={{color: 'white'}}>Mark Ruffalo explains the crisis in Yemen:</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WaQewDoipQQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
    )
}

export default Video