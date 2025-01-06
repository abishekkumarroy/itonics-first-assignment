This code basically is done by cypress, cucumber BDD & follows paject object model.
It follows steps:-
1. Navigate to youtube.com
2. From the search bar, search for “Itonics”
3. Click on the first video that comes up and navigate to the video’s detail page
4. Assert the URL of the video detail page is correct
5. Click one of the videos randomly on the right side of the page
6. Then assert that the title of the video is the one you clicked. For example, you randomly
selected the second video on this list. Then you should expect the video title to be
“Master Ideation with ITONICS Academy’s FREE Course!” on the opening video detail
page

Software requirements:-
node v22.12.0
10.9.0

To run:- npm install
       - then npx cypress open
        -then in cypress window choose E2E testing 
        -then chosse browser chrome
       - then run "start testing e2e in chrome"
        -finally click on TestGridLoginTest on browser to see the automation run

dependencies": {
    "cypress": "^13.17.0",
    "cypress-cucumber-preprocessor": "^4.3.1",
  },
