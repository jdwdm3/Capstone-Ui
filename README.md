# Capstone-UI

---
__*The User Interface was developed locally on my Windows machine, and then hosted for free using an Amazon S3 bucket. Static hosting react applications was one of my favorite take aways during this project. I followed this medium post: https://medium.com/@serverlessguru/deploy-reactjs-app-with-s3-static-hosting-f640cb49d7e6 in order to set up my S3 bucket, AWS CLI locally, and my npm scripts to deploy my application to production with 2 quick commands.  Web hosting in the past has been much more of a pain; having to set up a virtual machine, in order to install a web server, seems like a bit of an overkill.  S3 allows you to serve back the files you need without having to worry about configuring an entire VM, and install various dependecnies, and configure the web server itself.*__

### Why React?
__*React was chosen mainly for one reason; I had been learning and working with the framework for the last almost year, and wanted to explore visulizations libraries that play well with React.  A little background about React, it doesn't directly manipulate the DOM, rather it utlizes a virtual DOM which it manipultes at various points of its 'life-cycle' and pushes the changes to the actual DOM at defined times.  One of the most Popular visualizations libraries with javascipt is D3, and D3 has a lot of extremely cool visulizations.  D3 gives you the ability to tell a really detailed story, that can captivate the audiences attention with eye appeal alone.  If you have good analytical findings, D3 can really drive that message home.  However, D3 works directly on the DOM.  With Reacts nature of manipulating a virtual DOM, and D3 working on the DOM directly, you can see already that there will be some issues.  Having the two DOMs out of sync can cause your application to experience some major issues.  D3 is not impossible to use with React, but after reading about how it clashes, I decided for the sake of this project, to find other visulization libraries to utilize:*__

1. React-Google-Charts  -- https://react-google-charts.com/
2. Victory Charts -- https://formidable.com/open-source/victory/docs/victory-chart/
3. Chart Kick -- https://chartkick.com/react
4. Canvas Js -- https://canvasjs.com/react-charts/
5. Fusion Charts -- https://www.fusioncharts.com/react-charts
6. React Vis -- https://uber.github.io/react-vis/examples/showcases/plots

__*I sent all of these options to my teammates and told them to scan through them, and on a per analytical bases, tell me which chart they felt they would like me to implement to best tell their story.  I didn't recieve much feedback, so I made the decision to just utilize React-Google-Charts throughout the user interface to keep things consistent, and easiest to implement.*__


__*The main reason I chose React besides wanting to explore more visulization libraries, is because I wanted to break up each team members findings into components.  I felt personally it was the best way to stay organized, and to not fight with random raw html files floating around.  I was also able to implement this User Interface utilizing npm (Node Package Manager) in order to find re-usable components that others have open sourced, and I could quickly install them and implement whatever I needed.*__
