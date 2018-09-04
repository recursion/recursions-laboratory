## recursions-laboratory
A simple react application for sharing things about myself, and the projects I have built. A bit of a portfolio site if you will.

This site was built in a rather ad-hoc fashion, with a focus on getting something up and running, rather than long-term maintainability. There are no tests (not that many are needed).

With a few modifications this app could be very generic so that anyone could use it for their portfolio page.


Cloned from the boilerplate: https://github.com/flexdinesh/react-redux-boilerplate 

## Features

- Simple, mobile first / responsive design.
- Home page with intro/about me.
- Projects page that loads projects from json for easy modification/management.
- Searchable/Sortable skills page that loads skills from json for easy modification/management.
- Contact page with validations, that provides a form for communication, so you can keep your email private.
- Compact react components for easy modification.
- Bulma / SCSS for easy style changes.

## Usage / Development

This project now assumes it will exist inside of an express server project folder, that uses /public to serve files from. So.. when running the build process in this project, it will build to projectRoot/../public. The server currently used can be found at https://github.com/recursion/rec-labs-server.

Easiest way to get the full project is:
- clone the server.
```git clone https://github.com/recursion/rec-labs-server```

- install server deps.
```
cd rec-labs-server
npm install
```

- clone the client - rename to client.
```git clone https://github.com/recursion/recursions-laboratory client```

- install client deps.
```
cd client
npm install
npm build
```

The client can be developed fully independantly of the server, but the server does need a client in /public to work.

## Todo

[ ] Modularize all project text, so that it can be easily edited from json files. The text in the Intro component is a great target for this. Any other titles, or text that woulc be personalized from user to user could also be moved into its own json file (general.json - or something similar).
[ ] Custom theme/style packs could be implemented, so that users could customize the layout/style easily.
[ ] .toJS() calls need to be isolated to selectors only. There were a few spots I used these in an incorrect location, and these need to be consolidated.

## Contributing

Not that any are required, but I'm open to any contributions that make sense.

## License

MIT license, Copyright (c) 2018 Michael Symmes
