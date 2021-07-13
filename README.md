# engageteamsclone
I created this project as a part of Microsoft Engage'21 Mentorship Program. I built a fully functional Microsoft Teams clone with WebRTC and React by implementing some techniques of the agile methodlogy in my project. Using this app, you can create chat rooms and have high quality video calls with your team members.  
Check out the live demo: https://clonemsteamschat.herokuapp.com/  

## The Challenge
### Build a Microsoft Teams clone
To build a fully functional prototype with at least one mandatory functionality - a minimum of two participants should be able connect with each other using your product to have a video conversation.

## Table of Contents
1. Video Conference App
2. Chat App

## Video Conference App
A fully functional Microsoft Teams clone built using WebRTC, Node.js and Express. Using this app, you can have high quality video calls with your friends all around the globe.
GitHub repo link: https://github.com/Ria700/MSteamsClone  
Check out the live demo: https://clonemsteams.herokuapp.com/  

### Developed using
- Node.js
- express
- socket.IO
- EJS
- UUID
- PeerJS (WebRTC)
- Deployment: Heroku

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

Happy Video Call Experience!

### Features
1. Have a video conference with friends over different tabs, browsers, devices and networks.
2. More than two participants are able connect with each other using your product to have a good quality video conversation.
3. Experience high quality video calls
4. Switch audio on/off
5. Switch video on/off
6. Invite more participants
7. Leave meeting
8. UI similar to that of teams
9. Chat with particpants during the Call
10. Mirrored video
11. Adding own name to profile with which you join the meeting
12. Chat application accessible 
13. One time use disposable meeting ids

### User stories

### How the App looks / readme pretty?

## Chat App
An intensive chat application built with React and chatengine.io. With a user interface very similar to that of teams, you can create chat rooms, add and delete members, send messages, attachments and even dial in a video call.
GitHub repo link: https://github.com/Ria700/teamschat  
Check out the live demo: https://clonemsteamschat.herokuapp.com/  

### Developed using
- [chatengine.io](https://chatengine.io/)
- React
- Deployment: Heroku

### Credentails to use the app(any):
Guest ID 1:
    username: guest1  
    password: 2444  

Guest ID 2:  
    username: guest2  
    password: 2444  

Guest ID 3:  
    username: guest3  
    password: 2444 

### Installation Guide
Make sure you have Node.js installed in your system. If not, download it from [here](https://nodejs.org/en/download/).

Clone [the following](https://github.com/Ria700/teamschat) repo on your local system.

    git clone https://github.com/Ria700/teamschat.git

Now to install all required node modules

    npm i

Run Server

    npm start

Open browser and goto http://localhost:3000/

Create chat rooms and catch with your friends.

### Features
1. Chat with friends from anywhere around the globe
2. User Authentication
3. Create and delete chats
4. Add and delete memebers from chats
5. Shows online and offline status
6. Send attachments
7. Connected to video 
8. UI similar to teams
9. Sound Notifications for sending and receing messages
10. Prompt for wrong credentials

### User stories


### How to use the app
<img src="https://github.com/Ria700/engageteamsclone/blob/main/Screenshot%20(227).png?raw=true" width="500px" align="right">
1. Login using these credentials: 
 
        Guest ID 1:
            username: guest1  
            password: 2444  

        Guest ID 2:  
            username: guest2  
            password: 2444  

        Guest ID 3:  
            username: guest3  
            password: 2444  
 </br>
 </br>
On entering the wrong credentials you will receive this message:
<img src="https://github.com/Ria700/engageteamsclone/blob/main/Screenshot%20(225).png?raw=true" width="700px" align="center">
</br>
</br>
2. Create rooms, add and delete members.

</br>
</br>
3. Send messages, attachments and dial in a video call.
<img src="https://github.com/Ria700/engageteamsclone/blob/main/Screenshot%20(229).png?raw=true" width="500px" align="center">

