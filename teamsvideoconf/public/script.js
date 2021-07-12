// reference to socket
const socket = io('/')
// reference to video-grid
const videoGrid = document.getElementById('video-grid')
// to get username
const user = prompt("Enter your name", "user");
// create a peer: connection to peer server
const myPeer = new Peer(undefined, { // peer server generates random user ids
    path: '/peerjs',
    host: '/', // root server
    port: '443'
})

// stream
let myVidStream;
// reference to a video
const myVid = document.createElement('video')
// mute our own video
myVid.muted = true;
// used for removing disconnected users
const peers = {}
// connect video
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => { // Promise that passes a stream
    myVidStream = stream;
    // function call to play video
    addVideoStream(myVid, stream)

    myPeer.on('call', call => {
        // receive streams
        call.answer(stream)
        // reference to a video
        const video = document.createElement('video')

        // respond to other video streams
        call.on('stream', userVideoStream => { // To share stream on all user screens
            setTimeout(() => {
                addVideoStream(video, userVideoStream)
            }, 1000)
        })
    })

    // event to connect to new user
    socket.on('user-connected', userId => { 
        // user is joining
        setTimeout(() => {
            // user joined
            connectToNewUser(userId, stream) // function to connect to stream
        }, 1000)
    })

    // chat fuctionality
     // input value
    let text = $("input");
     // when press enter send message
    $('html').keydown(function (e) {
        if (e.which == 13 && text.val().length !== 0) {
            socket.emit('message', text.val())
            text.val('')
        }
    })
    socket.on("createMessage", (message, userName) => {
        // functionality to append messages & add name before every message
        $("ul").append(`<li class="message">
            <b>
                <i class="far fa-user-circle"></i>
                <span>${userName === user ? "me" : userName} </span> 
            </b>
            <br/>
                ${message}
        </li>`)
        // fuction for scrolling the chat window
        scrollToBottom()
    })
})

// run when the user disconnects
socket.on('user-disconnected', userId => {
    if (peers[userId]) peers[userId].close()
})

// run when connected with peer server 
myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id, user)
})

// Function to use our video and stream
function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play() // play video
    })
    videoGrid.append(video) // append video on video-grid
}

// Function that uses call() from peerjs
// also connects diffrent users streams with each other
// removes waste videos
function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream) // call() from peerjs
    const video = document.createElement('video') // get other user's video
    call.on('stream', userVideoStream => { // pass our video
        addVideoStream(video, userVideoStream)
    })
    call.on('close', () => { // to remove videos of user who disconnected
        video.remove()
    })
    peers[userId] = call
}

// Function to mute & unmute
const muteUnmute = () => {
    const enabled = myVidStream.getAudioTracks()[0].enabled;
    if (enabled) {
        myVidStream.getAudioTracks()[0].enabled = false
        setUnmuteButton() // Function call to change UI to Unmute
    } else {
        setMuteButton() // Function call to change UI to Mute
        myVidStream.getAudioTracks()[0].enabled = true
    }
}

// Function to play and stop video
const playStop = () => {
    console.log('object')
    let enabled = myVidStream.getVideoTracks()[0].enabled;
    if (enabled) {
        myVidStream.getVideoTracks()[0].enabled = false;
        setPlayVideo()
    } else {
        setStopVideo()
        myVidStream.getVideoTracks()[0].enabled = true;
    }
}

// Function to set the microphone button as mute
const setMuteButton = () => {
    const html = `
    <i class="fas fa-microphone"></i>
  `
    document.querySelector('.main__mute_button').innerHTML = html;
}

// Function to set the microphone button as unmute
const setUnmuteButton = () => {
    const html = `
    <i class="unmute fas fa-microphone-slash"></i>
  `
    document.querySelector('.main__mute_button').innerHTML = html;
}

// Function to set the video button as play
const setPlayVideo = () => {
    const html = `
  <i class="stop fas fa-video-slash"></i>
  `
    document.querySelector('.main__video_button').innerHTML = html;
}

// Function to set the video button as stop
const setStopVideo = () => {
    const html = `
    <i class="fas fa-video"></i>
  `
    document.querySelector('.main__video_button').innerHTML = html;
}

// Invite button functionality
document.getElementById("invite-button").addEventListener("click", getURL);

function getURL() { 
    const c_url = window.location.href;
    copyToClipboard(c_url);
    alert("Url Copied to Clipboard,\nShare it with your Friends!\nUrl: " + c_url);
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

// Leave button functionality
document.getElementById("leave-button").addEventListener("click", leaveCall);

function leaveCall() {
    window.location.href = "https://clonemsteamschat.herokuapp.com/";
}

// Scroll functionality for chat
const scrollToBottom = () => {
    var d = $('.main__chat_window');
    d.scrollTop(d.prop("scrollHeight"));
}