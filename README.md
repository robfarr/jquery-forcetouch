# jQuery Force Touch
A jQuery library to emulate Apple's force / 3D touch functionality.

[Github Pages](http://robfarr.github.io/jquery-forcetouch)

Force touch can be used to trigger functionality when the user holds down on an element, without breaking any existing `onclick` functionality.

The [example](http://robfarr.github.io/jquery-forcetouch/example/index.html) included displays a preview of the link when it is force touched.


## Usage
Call `.forcetouch();` with any of the specified options to enable force touch on the element.

**Configuration Options**
* `onstart` - Invoked when the force touch is started / triggered.
* `onend` - Invoked when the force touch is ended. 
* `delay` - Overrides the default delay of 100ms between a user holding down and the `onstart` event being triggered.