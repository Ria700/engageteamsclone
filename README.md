# engageteamsclone
Project for Microsoft Engage'21  
Check out the live demo: https://clonemsteamschat.herokuapp.com/  
Design: ?

## The Challenge
### Build a Microsoft Teams clone
To build a fully functional prototype with at least one mandatory functionality - a minimum of two participants should be able connect with each other using your product to have a video conversation.

## Table of Contents
1. Video Conference App
2. Chat App

## Video Conference App
description  
GitHub repo link: https://github.com/Ria700/MSteamsClone  
Check out the live demo: https://clonemsteams.herokuapp.com/  

### Developed using
- Node.js
- express
- socket.IO
- EJS
- UUID
- PeerJS (WebRTC)

### Installation Guide
Make sure you have Node.js installed in your system. If not, download it from [here](https://nodejs.org/en/download/).

Clone [the following](https://github.com/Ria700/MSteamsClone) repo on your local system.

    git clone https://github.com/Ria700/MSteamsClone.git

Install PeerJS globally.

    npm i -g peerjs 

Now to install all required node modules

    npm i

Run Server

    npm start

Server Started on Port 3000.

Run PeerJS Server in separate terminal.

    peerjs --port 3001

PeerJS Server Started on Port 3001.  

Open browser and goto http://localhost:3000/

**Important :** Allow the camera and audio permissions asked by the browser.

Now copy the url and open in another tab.

Enjoy the video chat!

### Features
1. Have a video conference with friends over diffrent tabs, browsers, devices and networks.
2. High quality videos
3. A minimum of SIX participants are able connect with each other using your product to have a good quality video conversation.
4. Mute audio functionality
5. Video off functionality
6. Invite more participants
7. Leave meeting
8. UI similar to that of teams
9. Chat with particpants (name of each participant appears before the message)
10. Mirrored video

### User stories

### How the App looks / readme pretty?

## Chat App
description  
GitHub repo link: https://github.com/Ria700/teamschat  
Check out the live demo: https://clonemsteamschat.herokuapp.com/  

### Developed using
- [chatengine.io](https://chatengine.io/)
- React

### Installation Guide
Make sure you have Node.js installed in your system. If not, download it from [here](https://nodejs.org/en/download/).

Clone [the following](https://github.com/Ria700/teamschat) repo on your local system.

    git clone https://github.com/Ria700/teamschat.git

Now to install all required node modules

    npm i

Run Server

    npm start

Open browser and goto http://localhost:3000/

### Features
1. Chat with friends from anywhere around the globe
2. User Authentication
3. Create and delete chats
4. Add and delete memebers from chats
5. Shows online and offline status
6. Send attachments
7. Connected to video 

### User stories

### How the App looks / readme pretty?