# jQuery Wheel Event Plugin

A [jQuery](http://jquery.com/) wheel event plugin that support cross-browser.

```js
// using on
$('#scroll-wrap').on('wheel', function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaMode);
});

// using the event helper
$('#scroll-wrap').wheel(function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaMode);
});
```

# Using with [Bower](http://bower.io/)

```bash
bower install jquery.wheel
```

## License

This plugin is licensed under the [MIT License](LICENSE.txt).

Copyright (c) 2013 [Brandon Aaron](http://brandon.aaron.sh)