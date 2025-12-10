TO RUN THE SVELTE PROJECT
---
Needs iconify@svelte 

npm install @iconify/svelte

DOCUMENTATION
---
app idea:
---
This app is meant to help people with social anxiety, people that want to improve their social skills, or people that just want to reach out to people more. I believe this issue to be increasingly more important with more people being left behind lacking friends or people to talk to. I think this app is something that could really be a great motivation and practice tool for people to come out and meet new people and socialize with others. I have had personal experience of loneliness and struggle to meet new people. From my experience, having little or no friction vastly improves my chances of continuing something, so having an idea for how to reach out makes it easy and simple to work on your social skills.

The idea is to get a task a day and have that person need to complete it within the day to be able to check it off and continue a streak which they will build up over time. There is also a friends section so you can see how your friends are doing and compete for the best streak to encourage even more socialization and friendly competition. Many times the biggest obstacle is convenience, so the app is meant to be as simple and easy to use as possible and also automatically receiving a task to complete takes out the stress of having to think of something to do or say to someone. The friends list is extremely important as well becuase you are able to have a support net of people that care about your journey. The streak is similar and motivates you to compete with yourself and in the same way, the streak pages history is there to show you that you are doing well and motivate you to keep going.

initial sketch / design work:
---
![IMG_0049](https://github.com/user-attachments/assets/8a64861d-1771-456f-bf95-4b998a50acb6)
This sketch was a simple idea I had in my head and working it out on paper was helpful for refining that, but I didn't expand out more sketches because I thought that this was a perfect jumping off point to get right into developing and I explain the minor tweaks to this design that came out in the development.

design process / interface details:
---
Going off this sketch, I began laying out the website in that format, tweaking a few designs here and there. I simplified the profile page down to just username, image, and difficulty. I also dumbed down the awards as for just a proof of concept I wanted to have a simpler look and feel where the streaks were prioritized to encourage consistent engagement so that people stay with their goals. The friends list is similar. While there is no way built in to add friends, there would be in a final version of this with invite links or username lookups, but that seemed outside of the scope for this project. The streaks page ended up being the most detailed, with the current streak at the top and the days which you've tracked with the task and whether the task was completed to allow someone to gain insight into how much they've been able to accomplish to motivate them to continue growing. Finally, the home page is designed to be simple. The idea of the app is to motivate someone to go out and reach out to people and improve their social skills and overcome anxiety surrounding that, so I wanted the UI to be as easy and stress free as possible. With that in mind, I put the date and the task front and center with a simple check box to hit if you completed it. This makes it easy to just open the app, see the task, close it and go do it, then come back and check it off for your day without taking too much time to navigate or add comments which can be a deterrent if someone is already not wanting to do these things.

interface:
---
Home Page:
<img width="1440" height="669" alt="Screenshot 2025-12-08 at 6 06 06 PM" src="https://github.com/user-attachments/assets/79d68bc2-9676-425e-b8f6-8a0c6dbe1af2" />

Friends Page:
<img width="1440" height="669" alt="Screenshot 2025-12-08 at 6 06 31 PM" src="https://github.com/user-attachments/assets/577e4822-79a9-4d52-b950-1541e41df41f" />

Awards Page:
<img width="1440" height="669" alt="Screenshot 2025-12-08 at 6 06 54 PM" src="https://github.com/user-attachments/assets/220aeb36-5591-4789-ac3f-bd497fff6494" />

Streaks Page:
<img width="1440" height="669" alt="Screenshot 2025-12-08 at 6 07 22 PM" src="https://github.com/user-attachments/assets/7466b965-742a-405e-8a8c-166a9a94f50d" />

Profile Page:
<img width="1440" height="669" alt="Screenshot 2025-12-08 at 6 07 40 PM" src="https://github.com/user-attachments/assets/1337910d-d230-463e-90a0-424f2805c461" />

Explanation of Data:
---
I hardcoded in 3 days of past data and today's task is randomized from a set of options from the selected difficulty. In a real implementation, it would eliminate tasks once they were given to prevent repeats and would have a much larger set of tasks, but for this project I kept it simple just to show what this might look like. The friends list is also harcoded along with their individual streaks, obiously this would be stored on a server somewhere in the real world and there would also be a way to add friends. All the data and the majority of the transformation or calculation functions is held in the data folder in the userdata.js file so that it syncs across pages and is centralized for modifications.

Implementation:
---
For this project, I used svelte. I used iconify for the logos for buttons on the navbar which is it's own svelte file so that it is the same across all pages. A lot of the styling is centralized in the app.css, but each page has a decent amount in there as well which is specific to it. For the main portion of the code, I split it all out across different svelte files for each page for ease of separation. Overall none of the code was extremely complex other than the getStreak function which I utilized AI to help me write and fix when it kept breaking. 

Use of AI:
---
I did use AI for this project in select places. I utilized it like I mentioned above for help with the getStreak function. I also used it to help generate some fake data to keep and had it help me debug issues with hosting and the code itself. It really was like a partner where I was able to bounce questions or generate some dummy data or filler.

The strengths of AI is definitely in filling in blanks, such as missing pieces of functions, debugging where it has code and an error and can pinpoint mistakes, or in creating boilerplates which I can use as a jumping off point for developing the app. Another great thing to use it for is making a tweak across a lot of places, like when I needed to add a $ before a variable after I changed it to writeable, it was able to find all the places that was needed.

AI can be weak in places like styling and spacing out elements. Also, for debugging or filling in functions, if it can't get it the first time, it struggles to solve a problem. For example, when I was struggling on the getStreak function which involved date math and with interuptions resetting, it took me almost an hour between debugging myself and and bouncing solutions through Github Copilot for it to finally give me a useful fix.

Future Work:
---
In the future, I would like to include a setting to add more tasks per day. I think this would be useful for people more advanced in their social journey who want more of a challenge than just one task. I also think dynamic scaling of tasks would be a fun addition, where as your streak builds, your difficulty auto increases and won't let you lower it to force people out of their comfort zone and going with that, it could also add more tasks and scale that way as well.

I also think that the ability to add friends and remove friends would be really important to add. The awards page is also a little lacking, I would like there to be more awards like medals for streaks and difficulties or even special tasks that are really hard or are more involved that earn you a medal. Along with that being able to select 3 or so medals to display on your profile for friends to see would also be a great add.

As for work I attempted but didn't complete, I tried to grow the awards page similar to what I mentioned above, but the special tasks and displaying on profile were going to be extremely involved and adding friend profiles as well would be more work than I'd be able to do within the timeframe.

LINKS
---
Public Hosting: https://elipappas.github.io/UserInterfaceProj4/#/

Demo Video: https://github.com/elipappas/UserInterfaceProj4/blob/main/ui_proj4_demo.zip

for the video you will need to download and unzip from this link ^
