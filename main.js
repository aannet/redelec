const electron = require('electron');
const {app, BrowserWindow} = electron;

// require('crash-reporter').start();

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    let mainWindow = new BrowserWindow({width:800, height:600})
    mainWindow.loadURL('file://'+__dirname+'/index.html')
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
})







const redmine = require('node-redmine');

/* CREDENTIALS HERE */



var poetry = new redmine(hostname, config);

// console.log(poetry);
// console.log(hostname);

/**
 * Dump issue
 */
var dump_issue = function(issue) {
    console.log('Dumping issue:');
    for (var item in issue) {
        console.log('  ' + item + ': ' + JSON.stringify(issue[item]));
    }
};
/*
poetry.issues({limit: 2}, function(err, data) {
    if (err) throw err;

    for (var i in data.issues) {
        dump_issue(data.issues[i]);
    }
    console.log('total_count: ' + data.total_count);
});*/


poetry.projects({id:723}, function(err, data) {
    if (err) throw err;

    console.log(data.total_count + ' projets autorisés.');


    //order by name and parents
    for (var i in data.projects) {
        // console.log(data.projects[i].name);
        var project = data.projects[i];
        if ( project.hasOwnProperty('parent')) {
            console.log('---' + data.projects[i].name);
        }
        else {
            console.log(data.projects[i].name);
        }

    }
});



