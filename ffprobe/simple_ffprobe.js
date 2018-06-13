const cp = require('child_process');

var videoPath = process.argv.slice(2);

var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', videoPath], { encoding : 'utf8' });
var output = JSON.parse(ffprobe.stdout);

console.log(JSON.stringify(output, null, 4));
