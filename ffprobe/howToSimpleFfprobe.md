# Simple ffprobe

###  How does ffprobe relate to thelocalworkflow?

ffprobe is part of ffmpeg, the program we use for processing video in the command line. ffprobe specifically does exactly what it sounds like -- it "reads" the data from a video file and outputs it in text format. (Full documentation [here](https://www.ffmpeg.org/ffprobe.html).) So, ffprobe isn't going to make any changes to your video, but it's important for learning thelocalworkflow because if we use ffprobe to output a video's data in json (javascript object notation), we get the data in the format we'll use to access it in thelocalworkflow. So knowing this format and how to read it is key!

## Running simple_ffprobe
OK - Let's get to it. In this repository is a file called `simple_ffprobe.js`. That's the code we'll run for the basic probe.

Let's go through it line by line:

``` const cp = require('child_process');
```

Here we're requiring an existing node package, that is a module someone else has written. To use a package, it needs to be installed in the **node_modules** folder in the same directory (or a parent directory of it) as the script you're running. You can also check to see if a package is installed by checking the **package.json** file. For more on installing node packages see this (to be written?) tutorial.


``` var videoPath = process.argv.slice(2);
```

Next we define a variable that's going to hold the path the video file we're probing. `process.argv` takes an argument, in this case the path as a string, from the command line.  
