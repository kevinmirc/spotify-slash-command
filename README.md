# Spotify Slash Command for Mixmax
This is a MixMax extension for adding music to your composition window.

## Running locally

1. Install using `npm install`
2. Run using `npm start`

To simulate locally how Mixmax calls the typeahead URL (to return a JSON list of typeahead results), run:

```
curl http://localhost:9145/typeahead?text=hello
```

To simulate a preview of what's renderd in the Mixmax composition window, run:

```
visit http://localhost:3000/resolver?text=artist(s):%20Kendrick%20Lamar,%20Jay%20Rock%20(2HbKqm4o0w5wEeEFXm2sD4)
```
