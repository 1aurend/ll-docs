# Simple ffprobe

###  How does ffprobe relate to thelocalworkflow?

ffprobe is part of ffmpeg, the program we use for processing video in the command line. ffprobe specifically does exactly what it sounds like -- it "reads" the data from a video file and outputs it in text format. (Full documentation [here](https://www.ffmpeg.org/ffprobe.html).) So, ffprobe isn't going to make any changes to your video, but it's important for learning thelocalworkflow because if we use ffprobe to output a video's data in json (javascript object notation), we get the data in the format we'll use to access it in thelocalworkflow. So knowing this format and how to read it is key!


## The Script -- simple_ffprobe.js

OK - Let's get to it. In this repository is a file called `simple_ffprobe.js`. That's the code we'll run for the basic probe.

Let's go through it line by line:

    const cp = require('child_process');


Here we're requiring an existing node package, that is a module someone else has written. To use a package, it needs to be installed in the **node_modules** folder in the same directory (or a parent directory of it) as the script you're running. You can also check to see if a package is installed by checking the **package.json** file. For more on installing node packages see this (to be written?) tutorial.


    var videoPath = process.argv.slice(2);

Next we define a variable that's going to hold the path the video file we're probing. `process.argv` takes an argument, in this case the path as a string, from the command line.

    var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', videoPath], { encoding : 'utf8' });

This line runs the actual probe. Inside the square brackets are the options we're using. 'json' tells the probe to output as a JSON object. -v gives us the version; -show_format gives us format information, and so on. See the documentation above for all the option.

    var output = JSON.parse(ffprobe.stdout);

This line converts the output of the ffprobe into clean JSON. To see what it does, try commenting out this line and logging ffprobe to the console directly.

    console.log(JSON.stringify(output, null, 4));

Lastly, we log to the console the result of our probe. Using JSON.stringify cleans up linespacing and indents to make it easier to read. Again, to see what it does, try logging just the variable `output` without stringify.



## Running the Probe

In terminal, navigate to directory holding your ffprobe script. Then install your dependencies (`npm install`) and run the following:

    node simple_ffprobe [path your video file]

You can get the path by dragging and dropping your video into terminal. Don't include the square brackets.



## Next Challenge!

Now try accessing some specific data about your video and logging to the console just that piece of info. For example, if you set a variable to = *output.streams.duration*, your log could read something like this:

    The video's duration is xxx.
