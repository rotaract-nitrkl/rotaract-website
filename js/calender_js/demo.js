var events = [
  {'Date': new Date(2016, 6, 7), 'Title': 'Doctor appointment at 3:25pm.'},
  {'Date': new Date(2016, 6, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
  {'Date': new Date(2016, 6, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
  {'Date': new Date(2019, 8, 11), 'Title': 'SmrutiSikha ka birthday'},
  {'Date': new Date(2019, 0, 10), 'Title': 'Smruti ka birthday'},
  {'Date': new Date(2019, 5, 11), 'Title': 'Aatish ji ka birthday'},
  {'Date': new Date(2019, 6, 12), 'Title': 'Simran didi ka birthday'},
  {'Date': new Date(2019, 6, 7), 'Title': 'Vaibhav bhaiya ka birthday'},
  {'Date': new Date(2019, 5, 16), 'Title': 'Kamaljeet ka getElementById'}
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
