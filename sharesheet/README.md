# Project2-react

ABOUT PROJECT NAME AND SUMMARY

        My project name is called Anime Share Sheet. This website I created is simply targets at people that enjoys browsing, creating and sharing piano music score sheets about Japanese anime. 

        Actually me myself loves playing piano, especially piano piece that covers anime songs(anime OPs, OTSs etc). However, majority of the webpages would always show plenty of search results that are not anime-related whenever I browse for piano sheets on anime songs. Hence, I had this idea of creating a piano sheet platform specially targeting at anime/games songs.

        The goal for my project is to let anime lovers like me to search piano music sheets for anime songs easily. Compared to other major platforms, this webpage only consists of anime/games related song covers, which is very convinent for people to get the music sheet they prefer.

        This is the url to my page: https://anime-sharesheet.netlify.app/.



ABOUT UX/UI

        As its a webpage consists of pianosheets, I set the overall color range into black and white, just like the piano keyboards. Moreover, I added some element on anime too, like the famous anime character"umaru" and "Anya". Also, I drew a logo for my webpage that consists of both anime and piano elements.

        I believe that the purpose of my web application is clear to the other users, and it actually meet my goal. I have listed every sheets with their related anime picture. Also, I think my web application is mobile responsive, and comfortable when viewing or inserting things on both mobile & phone devices. 
        Although I faced some difficulties on mobile responsiveness during project weeks, I managed to make it look pleasant on different devices eventually.

        In future, I will input more css styling and functions to beautify my web application and also to make it more useful and professional. I wil also insert more anime-related elements, as well as piano related items.


FEATURES
In Piano Share Sheet, users could create, read, update and delete their favourite piano sheet. There is also a search function that allows users to search sheet by its song name and anime name. Users could view a lot of indepth details of the piano sheet of their favorite anime, including but not limited to : song name, song composer, cover composer,link to listen the song and a preview. Anime description and a picture illustration is also showned on the website to help users recognise the song better.

Login feature is still under development so the users may not see any benefit of it other than seeing their user name displayed on the top right. In the futue, users would be only able to update and delete the sheets that they uploaded.

USE CASES:
Upload: Upload a piano sheet and fill in all fields in the form
Search and filter: Search for a piano sheet using song name and anima name, find the piano sheet that the user desire
Edit pianosheet : Edit the piano sheet after searching for it. User may correct any mistake or update any info
Delete the piano sheet : Delete unwanted sheets
Register and login to an account, so that user could potentially enjoy benefit in the future updates.

4.1.5 TECHNOLOGIES USED
Provide an overview of the languages, frameworks, libraries and any other tools that you have used to produce the project.  Be sure to provide a short description of where in the project the technology is used, and a URL to its Github repository. 

Libraries: React, Axios, MongoDB, Bootstrap, MDBootstap, NodeJs, ExpressJS(server side), Netifly

Languages: Javascript, Html, CSS, NoSQL


4.1.6 SAMPLE MONGO DOCUMENTS
in cover collection:
{
  "_id": {
    "$oid": "62cf5f84412536655375749e"
  },
  "original": {
    "songName": "Guren no Yumiya",
    "composer": [
      "Linked Horizon",
      "Revo"
    ]
  },
  "cover": {
    "coverComposer": [
      "Theishter"
    ],
    "version": [
      "self-compose",
      "original"
    ],
    "difficulty": "Normal",
    "coverPublishYear": "2016",
    "numberOfPages": "6",
    "pianoSheetUrl": "https://musescore.com/static/musescore/scoredata/g/12e978d1c1bd90c52f37b574ace5e9be3de69cc7/score_0.svg?no-cache=1640599426",
    "cost": {
      "$numberDecimal": "4.50"
    },
    "videoLink": "https://youtu.be/90Zd75a8qXM",
    "reviews": [
      {
        "user": "narutotototo",
        "rating": "5",
        "comment": "This song's hype went beyond the anime fandom. This song has multiple covers/versions like any other hyped up song. This song goes really well with the anime. In fact, it sort of affects you metaphysically speaking, giving you goosebumps all (like it did to me :joy: ). The song alongside the animated video gives kind of a gist of what the plot of the anime in consideration is. The song has progressive pace which is very much expected considering its genres. The song is really full of bass and a tinge of despair and horror. This considered as one of the best prog rocks in the anime industry."
      },
      {
        "user": "testuser",
        "rating": "4",
        "comment": "this is a test comment from testuser"
      }
    ],
    "imageUrl": "https://i1.sndcdn.com/artworks-000122936047-s3vify-t500x500.jpg",
    "keywords": [
      "Award winning"
    ]
  },
  "animaeRelated": {
    "animaeName": "Attack on Titans",
    "animaeDescription": "Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. 'The Advancing Giants') is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother. Attack on Titan was serialized in Kodansha's monthly shōnen manga magazine Bessatsu Shōnen Magazine from September 2009 to April 2021, with its chapters collected in 34 tankōbon volumes."
  },
  "username": "my user name"
}

in user collection:
{
  "_id": {
    "$oid": "62dffab48ee95e1055733e64"
  },
  "userEmail": "test@test.com",
  "userNickName": "test Nick Name",
  "password": "12345",
  "username": "test user"
}


TESTING

1. To test for user login validation:

    Click onto the "login" button on the top
      On the login page:
          - Enter random numbers in email, it shows"please fill in a valid email"

          - Enter a new user name and password, it will show "Email not found"

          - When clicking "Not a member? Register", it will redirect user to register page.

      On the login page:
          -When did not fill in any fields, it shows "please fill in all fields"

          -Enter registered username, it shows "username is registered"

          -Enter registered email, it shows "email is registered"
          
          -When password and repeat password does not match,it shows "re-enter password mismatch"

          When everything is filled in cofrectly, it will show login success and registered successful respectively.

 2. At the search button, there will be search categories, and filters, it will filter the data when clicked while searching. 

   Users are able to update and delete related music sheets through the "edit" and "delete" buttons at the results.


3. While uploading sheets, user will have validations of "please fill in all fields" if any fields is not filled up. After submitting the sheets, the new sheet will appear at the bottom of the data list.

4. At the bottom of the homepage there are buttons for emails and contact numbers that will redirectusers straight away to send emial and call page when clicked.

5. At details sheet, users can click onto the cmall pinao to listen the piano cover videos.



CREDITS

        mongo db https://www.mongodb.com

        bootstrap https://getbootstrap.com

        reactbootstrap https://react-bootstrap.github.io

        stackoverflow websites https://stackoverflow.com

        teacher's github notes

        MDBreact: https://mdbootstrap.com/docs/react/

        axios: https://github.com/axios/axios

        expressJS: https://expressjs.com/

        crud tutorials on youtube https://www.youtube.com/watch?v=wnfjx65aQTw

        reactJS: https://reactjs.org/